import React from "react";
import { AppointmentCard } from "./AppointmentCard";
import { patients } from "../dummyData";

export const DoctorPendingAppointment = ({ pendingAppointment }) => {
  const appointments = patients;
  return (
    <div className="pending-appointments">
      <h4 style={{ marginBottom: "1rem" }}>Pending Patients Request</h4>
      {appointments.map((appointment, key) => (
        <AppointmentCard
          appointment={appointment}
          key={key}
          border={key !== 0 && "none"}
          appointmentStatus={false}
          cursor="text"
        />
      ))}
    </div>
  );
};
