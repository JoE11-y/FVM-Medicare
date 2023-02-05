import React, { useContext } from "react";
import { AcceptAppointment } from "./AcceptAppointment";
import { DeclineAppointment } from "./DeclineAppointment";
import { appointmentSummaryContext } from "../context";

export const AppointmentCard = ({ appointment, border, cursor, index }) => {
  const { dispatch } = useContext(appointmentSummaryContext);
  return (
    <div
      className="appointment-card"
      style={{ border, cursor }}
      onClick={() => {
        appointment.appointmentStatus === 2 &&
          appointment.medicalRecordShared &&
          dispatch({ type: "SET_CURR_APPOINTMENT", payload: index });
      }}
    >
      <div className="appointment-img">
        <img src={appointment.image} alt="" srcSet="" />
      </div>
      <div className="patient-name">
        <p>{appointment.name}</p>
        <small style={{ opacity: 0.5 }}>{appointment.appointmentType}</small>
      </div>
      {appointment.appointmentStatus === 2 ? (
        appointment.requestStatus === 1 && !appointment.medicalRecordShared ? (
          <div className="appointment-time">Awaiting Medical Record</div>
        ) : (
          <div className="appointment-time">Medical Record Available</div>
        )
      ) : appointment.appointmentStatus === 1 ? (
        <div className="appointment-time">
          <AcceptAppointment appointment={appointment} />
          <DeclineAppointment appointment={appointment} />
        </div>
      ) : null}
    </div>
  );
};
