import { Alert, AlertTitle } from "@mui/material";
import React, { useState } from "react";
import { IpfsImage } from "react-ipfs-image";
import { useSigner, useProvider } from "wagmi";
import { Icon } from "@mui/material";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import { useFVMMedicareContract, usePatientNFTContract } from "../hooks";
import { VideoCall } from "./VideoCall";
import { respondToDataRequest } from "../apis/FVMMedicare";
import { revokeAccess, shareAccess } from "../apis/Lighthouse";
import LoadingButton from "@mui/lab/LoadingButton";

export const PatientAppointmentCard = ({ appointment, type }) => {
  const provider = useProvider();
  const { data: signer, isFetched } = useSigner();
  const [loading, setLoading] = useState(false);
  const contract = useFVMMedicareContract(provider);

  const nftContract = usePatientNFTContract(provider);

  const handleResponse = async (response) => {
    setLoading(true);
    if (!isFetched) return;
    const linkedContract = contract.connect(signer);
    const nftContractLinked = nftContract.connect(signer);
    const address = await signer.getAddress();
    const tokenId = await nftContractLinked.getTokenId(address);
    const cid = await nftContractLinked.tokenURI(tokenId);

    try {
      if (response) {
        const result = await shareAccess(
          cid,
          signer,
          appointment.doctorAddress
        );
        if (result) {
          const Txn = await respondToDataRequest(
            linkedContract,
            appointment.appointmentId,
            response
          );

          await Txn.wait();
        }
      } else {
        const result = await revokeAccess(
          appointment.cid,
          signer,
          appointment.doctorAddress
        );
        if (result.status === "Success") {
          const Txn = await respondToDataRequest(
            linkedContract,
            appointment.appointmentId,
            response
          );

          await Txn.wait();
        }
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="doctor-appointment"
        style={{
          backgroundColor: "#fff",
          margin: "1rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <div className="appointment-img">
            <IpfsImage
              hash={
                appointment.image
                  ? appointment.image
                  : "Qme8SriYgGNoXQzG1qYYZKThv3QTBf7pMJwUpu3gqaqQRH"
              }
              gatewayUrl={
                appointment.image
                  ? "https://gateway.lighthouse.storage/ipfs"
                  : "https://gateway.pinata.cloud/ipfs"
              }
            />
          </div>
          <div className="doctor-name" style={{ marginLeft: "0rem" }}>
            <p>
              {appointment.name}{" "}
              <small style={{ opacity: 0.5, fontWeight: "bold" }}>
                {appointment.specialization}
              </small>
            </p>
            <Icon
              component={LocalPharmacyIcon}
              fontSize="small"
              color="secondary"
            />
            <small style={{ opacity: 0.5, fontWeight: "bold" }}>
              {" "}
              {appointment.hospital}
            </small>
          </div>
        </div>
        <div className="doctor-message">
          {appointment.appointmentStatus === 1 ||
          appointment.appointmentStatus === 3 ? (
            <Alert severity="info">
              <AlertTitle>Your message</AlertTitle>
              <p>{appointment.patientMessage}</p>
            </Alert>
          ) : (
            <Alert severity="info">
              <AlertTitle>Doctor's message</AlertTitle>
              <p>{appointment.doctorMessage}</p>
            </Alert>
          )}
        </div>

        <div style={{ marginTop: "1rem" }}>
          {type === "scheduled" ? (
            <>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "3fr 3fr",
                  alignItems: "center",
                  margin: "auto",
                  marginBottom: "1rem",
                  width: "70%",
                }}
              >
                <VideoCall meetId={appointment.uniqueKey} />
                <LoadingButton
                  color="primary"
                  variant="contained"
                  onClick={() => handleResponse(false)}
                  loading={loading}
                >
                  Revoke Access
                </LoadingButton>
              </div>
            </>
          ) : type === "accepted" ? (
            <div style={{ marginTop: "1rem" }}>
              <LoadingButton
                color="info"
                variant="contained"
                onClick={() => handleResponse(true)}
                loading={loading}
              >
                Share Access
              </LoadingButton>
            </div>
          ) : type === "rejected" ? (
            <></>
          ) : null}
        </div>
      </div>
    </div>
  );
};
