import React from "react"
import img from "../images/doctor.jpg"
import { AcceptAppointment } from "./AcceptAppointment"
import { DeclineAppointment } from "./DeclineAppointment"

export const AppointmentCard = ({
  image,
  name,
  type,
  time,
  border,
  appointmentStatus,
  cursor,
}) => {
  return (
    <div className="appointment-card" style={{ border, cursor }}>
      <div className="appointment-img">
        <img src={img} alt="" srcset="" />
      </div>
      <div className="patient-name">
        <p>{name}</p>
        <small style={{ opacity: 0.5 }}>{type}</small>
      </div>
      {appointmentStatus ? (
        <div className="appointment-time">{time}</div>
      ) : (
        <div className="appointment-time">
          <AcceptAppointment />
          <DeclineAppointment />
        </div>
      )}
    </div>
  )
}
