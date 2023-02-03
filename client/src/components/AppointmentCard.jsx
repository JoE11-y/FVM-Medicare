import React, { useContext } from "react";
import { AcceptAppointment } from "./AcceptAppointment";
import { DeclineAppointment } from "./DeclineAppointment";
import { appointmentSummaryContext } from "../context";

export const AppointmentCard = ({
  image,
  name,
  type,
  time,
  border,
  appointmentStatus,
  cursor,
  index,
  message,
  appointmentId,
  patientAddress,
}) => {
  const { dispatch } = useContext(appointmentSummaryContext);
  return (
    <div
      className="appointment-card"
      style={{ border, cursor }}
      onClick={() => {
        appointmentStatus &&
          dispatch({ type: "SET_CURR_APPOINTMENT", payload: index });
      }}
    >
      <div className="appointment-img">
        <img src={image} alt="" srcSet="" />
      </div>
      <div className="patient-name">
        <p>{name}</p>
        <small style={{ opacity: 0.5 }}>{type}</small>
      </div>
      {appointmentStatus ? (
        <div className="appointment-time">{time}</div>
      ) : (
        <div className="appointment-time">
          <AcceptAppointment
            name={name}
            image={image}
            msg={message}
            appointmentId={appointmentId}
            patientAddress={patientAddress}
          />
          <DeclineAppointment
            name={name}
            image={image}
            msg={message}
            appointmentId={appointmentId}
            patientAddress={patientAddress}
          />
        </div>
      )}
    </div>
  );
};
