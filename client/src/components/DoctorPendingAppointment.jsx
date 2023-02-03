import React from "react";
import { AppointmentCard } from "./AppointmentCard";
import { patients } from "../dummyData";

export const DoctorPendingAppointment = ({ pendingAppointment }) => {
  return (
    <div className="pending-appointments">
      <h4 style={{ marginBottom: "1rem" }}>Pending Patients Request</h4>
      {patients.map(({ name, type, time, image }, key) => (
        <AppointmentCard
          name={name}
          type={type}
          time={time}
          image={image}
          key={key}
          border={key !== 0 && "none"}
          appointmentStatus={false}
          cursor="text"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        />
      ))}
    </div>
  );
};
