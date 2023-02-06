import React from "react";
import { AppointmentCard } from "./AppointmentCard";
import { Icon } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

export const DoctorPendingAppointment = ({ pendingAppointments }) => {
  const appointments = pendingAppointments;
  return (
    <div className="pending-appointments">
      <h4 style={{ marginBottom: "1rem" }}>Pending Patients Request</h4>
      {appointments.length !== 0 ? (
        appointments.map((appointment, key) => (
          <AppointmentCard
            appointment={appointment}
            key={key}
            border={key !== 0 && "none"}
            appointmentStatus={false}
            cursor="text"
          />
        ))
      ) : (
        <p style={{ padding: "20px" }}>
          <Icon
            component={InfoIcon}
            color="info"
            fontSize="small"
            cursor={"pointer"}
          />{" "}
          No Requests
        </p>
      )}
    </div>
  );
};
