import React, { useContext } from "react"
import { AcceptAppointment } from "./AcceptAppointment"
import { DeclineAppointment } from "./DeclineAppointment"
import { patientSummaryContext } from "../context"

export const AppointmentCard = ({
  image,
  name,
  type,
  time,
  border,
  appointmentStatus,
  cursor,
  index,
}) => {
  const { dispatch } = useContext(patientSummaryContext)
  return (
    <div
      className="appointment-card"
      style={{ border, cursor }}
      onClick={() => {
        appointmentStatus && dispatch({ type: "SET_PATIENT", payload: index })
      }}
    >
      <div className="appointment-img">
        <img src={image} alt="" srcset="" />
      </div>
      <div className="patient-name">
        <p>{name}</p>
        <small style={{ opacity: 0.5 }}>{type}</small>
      </div>
      {appointmentStatus ? (
        <div className="appointment-time">{time}</div>
      ) : (
        <div className="appointment-time">
          <AcceptAppointment name={name} image={image} />
          <DeclineAppointment name={name} image={image} />
        </div>
      )}
    </div>
  )
}
