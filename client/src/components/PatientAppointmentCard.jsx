import { Alert, AlertTitle, Button } from "@mui/material";
import React from "react";
import { useSigner, useProvider } from "wagmi";
import { Icon } from "@mui/material";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import { useFVMMedicareContract } from "../hooks";
import { VideoCall } from "./VideoCall";
import { respondToDataRequest } from "../apis/FVMMedicare";
import { revokeAccess, shareAccess } from "../apis/Lighthouse";

export const PatientAppointmentCard = ({ appointment, type }) => {
  const provider = useProvider();
  const { data: signer, isFetched } = useSigner();
  const contract = useFVMMedicareContract(provider);

  const handleResponse = async (response) => {
    if (!isFetched) return;
    const linkedContract = contract.connect(signer);
    try {
      if (response) {
        const result = await shareAccess(
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
            display: "grid",
            gridTemplateColumns: "1fr 8fr",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <div className="appointment-img">
            <img src={appointment.image} alt="doctor" />
          </div>
          <div className="doctor-name">
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
          {appointment.appointmentStatus === 1 ? (
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
                  marginBottom: "1rem",
                  width: "100%",
                }}
              >
                <VideoCall meetId={appointment.uniqueKey} />
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => handleResponse(false)}
                >
                  Revoke Access
                </Button>
              </div>
            </>
          ) : type === "accepted" ? (
            <div style={{ marginTop: "1rem" }}>
              <Button
                color="info"
                variant="contained"
                onClick={() => handleResponse(true)}
              >
                Share Access
              </Button>
            </div>
          ) : type === "rejected" ? (
            <></>
          ) : null}
        </div>
      </div>
    </div>
  );
};
