import React from "react"
import img from "../images/doctor.jpg"

export const AppointmentCard = ({ image, name, type, time, border }) => {
  return (
    <div className="appointment-card" style={{ border }}>
      <div className="appointment-img">
        <img src={img} alt="" srcset="" />
      </div>
      <div className="patient-name">
        <p>{name}</p>
        <small style={{ opacity: 0.5 }}>{type}</small>
      </div>
      <div className="appointment-time">{time}</div>
    </div>
  )
}
