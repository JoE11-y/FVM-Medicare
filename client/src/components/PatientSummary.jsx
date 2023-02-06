import React, { useContext, useState } from "react";
import { useSigner, useProvider } from "wagmi";
import { VideoCall } from "./VideoCall";
import { appointmentSummaryContext } from "../context";
import { PatientRecords } from "./PatientRecords";
import { Icon } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { usePatientNFTContract } from "../hooks";
import { downloadNDecryptData } from "../apis/Lighthouse";
import LoadingButton from "@mui/lab/LoadingButton";
import { IpfsImage } from "react-ipfs-image";

export const PatientSummary = () => {
  const [open, setOpen] = useState(false);
  const {
    state: { appointment },
  } = useContext(appointmentSummaryContext);

  const [patientData, setPatientData] = useState({});
  const [loading, setLoading] = useState(false);

  const provider = useProvider();

  const { data: signer, isFetched } = useSigner();

  const patientNftContract = usePatientNFTContract(provider);

  const getPatientRecord = async () => {
    let response;
    setLoading(true);
    try {
      const patientTokenId = await patientNftContract.getTokenId(
        appointment.patientAddress
      );
      const patientCID = await patientNftContract.tokenURI(patientTokenId);
      console.log(patientCID);
      if (isFetched) {
        const data = await downloadNDecryptData(patientCID, signer);
        setPatientData(data);
      }
      response = true;
    } catch (e) {
      console.log(e);
      response = false;
    } finally {
      setLoading(false);
    }

    return response;
  };

  const showRecord = async () => {
    const response = await getPatientRecord();
    if (response) setOpen(true);
  };

  return (
    <div>
      <h4 style={{ marginBottom: "1rem" }}>Patient Summary</h4>

      <div className="patient-summary">
        {appointment?.patientAddress ? (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 4fr 1fr",
                alignItems: "center",
              }}
            >
              <div
                className="appointment-img"
                style={{ border: "none", width: "3.6rem", height: "3.6rem" }}
              >
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
              <div className="patient-name">
                <p>{appointment?.name}</p>
                <small style={{ opacity: 0.5, fontWeight: "bold" }}></small>
              </div>
              <LoadingButton
                variant="contained"
                color="info"
                loading={loading}
                size="small"
                onClick={() => showRecord()}
              >
                View Record
              </LoadingButton>
            </div>

            <div className="previous-actions">
              <div className="previous-action">
                <h5>Patient Message</h5>
                <small>{appointment?.patientMessage}</small>
              </div>
              <div className="previous-action">
                <h5>Your Message</h5>
                <small>{appointment?.doctorMessage}.</small>
              </div>
            </div>

            <VideoCall meetId={appointment?.uniqueKey} />
          </>
        ) : (
          <p style={{ padding: "20px" }}>
            <Icon
              component={InfoIcon}
              color="info"
              fontSize="small"
              cursor={"pointer"}
            />{" "}
            No Data
          </p>
        )}
      </div>
      <PatientRecords
        open={open}
        appointment={patientData ? patientData : {}}
        handleClose={() => setOpen(!open)}
      />
    </div>
  );
};
