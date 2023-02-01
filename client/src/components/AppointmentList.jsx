import React from "react"
import { AppointmentCard } from "./AppointmentCard"
import { patients } from "../dummyData"

export const AppointmentList = () => {
  return (
    <div className="patient-appointment-list">
      <h4 style={{ marginBottom: "1rem" }}>Appointment List</h4>
      {patients.map(({ name, type, time, image }, key) => (
        <AppointmentCard
          name={name}
          type={type}
          time={time}
          key={key}
          image={image}
          border={key !== 0 && "none"}
          appointmentStatus={true}
          index={key}
        />
      ))}
    </div>
  )
}
