import { Alert, AlertTitle, Button } from "@mui/material";
import React, { useContext } from "react";
import { useSigner } from "wagmi";
import { useFVMMedicareContract } from "../hooks";
import { VideoCall } from "./VideoCall";
import { respondToDataRequest } from "../apis/FVMMedicare";
import { revokeAccess, shareAccess } from "../apis/Lighthouse";

export const PatientAppointmentCard = ({ appointment, type }) => {
  // const { dispatch } = useContext(appointmentSummaryContext);
  const { data: signer } = useSigner();

  const handleRevokeAction = async () => {
    const result = await revokeAccess(
      appointment.cid,
      signer,
      appointment.doctorAddress
    );
  };

  const handleShareAction = async () => {
    const result = await shareAccess(
      appointment.cid,
      signer,
      appointment.doctorAddress
    );
  };

  const handleResponse = async (response) => {
    if (!response) return;

    // try {
    //   const Txn = await respondToDataappointment(contract. )
    // } catch (e) {
    //   console.log(e.message);
    // }
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
            <p>{appointment.name}</p>
          </div>
        </div>
        <div className="doctor-message">
          <Alert severity="info">
            <AlertTitle>Doctor's appointment</AlertTitle>
            <p>{appointment.message}</p>
          </Alert>
        </div>

        <div style={{ marginTop: "1rem" }}>
          {type === "pending" ? (
            <div style={{ marginTop: "1rem" }}>
              <Button
                color="success"
                // onClick={() => handleResponse(1)}
              >
                Accept
              </Button>
              <Button
                variant="contained"
                color="error"
                // onClick={() => handleResponse(2)}
              >
                Decline
              </Button>
            </div>
          ) : // <Button
          //   color="primary"
          //   variant="contained"
          // >
          //   {/* <Link
          //     to={`/select-records/${appointment.uniqueKey}`}
          //     style={{ textDecoration: "none", color: "inherit" }}
          //   >
          //     Send Record
          //   </Link> */}
          //   Accept
          // </Button>

          type === "accepted" ? (
            <>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "3fr 3fr",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <VideoCall key={appointment.uniqueKey} />
                <Button
                  color="primary"
                  variant="contained"
                  // onClick={() => handleRevokeAction()}
                >
                  Revoke Access
                </Button>
              </div>
            </>
          ) : type === "rejected" ? (
            <></>
          ) : null}
        </div>
      </div>
    </div>
  );
};
