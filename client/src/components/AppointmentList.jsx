import React from "react"
import { AppointmentCard } from "./AppointmentCard"

export const AppointmentList = () => {
  const patients = [
    { name: "Dell Jackson", type: "report", time: "9.00am" },
    { name: "Sophia Moore", type: "medical checkup", time: "10.00am" },
    { name: "Campbell Deschamp", type: "weekly visit", time: "2.00pm" },
    { name: "Jesse pep", type: "lab test", time: "4.00pm" },
  ]
  return (
    <div className="patient-appointment-list">
      <h4 style={{ marginBottom: "1rem" }}>Appointment List</h4>
      {patients.map(({ name, type, time }, key) => (
        <AppointmentCard
          name={name}
          type={type}
          time={time}
          key={key}
          border={key !== 0 && "none"}
          appointmentStatus={true}
        />
      ))}
    </div>
  )
}
