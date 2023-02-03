import { Alert, AlertTitle, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const PatientAppointmentCard = ({ img, name, message, id }) => {
  return (
    <div>
      <div
        className="patient-appointment"
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
            <img src={img} alt="doctor" />
          </div>
          <div className="doctor-name">
            <p>{name}</p>
          </div>
        </div>
        <div className="doctor-message">
          <Alert severity="info">
            <AlertTitle>Message</AlertTitle>
            <p>{message}</p>
          </Alert>
        </div>
      </div>
    </div>
  );
};
