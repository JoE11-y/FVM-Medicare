import React from "react";
import { Alert } from "@mui/material";
import { PatientAppointmentCard } from "./PatientAppointmentCard";

export const PatientAppointmentList = ({ severity, title, type, data }) => {
  return (
    <div>
      <Alert severity={severity} style={{ textTransform: "capitalize" }}>
        {title}
      </Alert>
      {data.map((appointment, key) => (
        <PatientAppointmentCard
          key={key}
          type={type}
          appointment={appointment}
        />
      ))}
    </div>
  );
};
