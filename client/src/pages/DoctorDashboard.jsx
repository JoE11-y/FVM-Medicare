import React from "react"
import { DesktopNav } from "../components/DesktopNav"
import { Logo } from "../components/Logo"
import { UserIcon } from "../components/UserIcon"
import { AppointmentCard } from "../components/AppointmentCard"
import { NextPatient } from "../components/NextPatient"

export const DoctorDashboard = () => {
  const patients = [
    { name: "Dell Jackson", type: "report", time: "9.00am" },
    { name: "Sophia Moore", type: "medical checkup", time: "10.00am" },
    { name: "Campbell Deschamp", type: "weekly visit", time: "2.00pm" },
    { name: "Jesse pep", type: "lab test", time: "4.00pm" },
  ]
  return (
    <div className="doctor-dashboard">
      <header className="landingHeader">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo colorTop={"#272F3F"} colorBottom={"#272F3F"} />
          <DesktopNav style={{ borderColor: "#272F3F", color: "#272F3F" }} />
        </div>
        <UserIcon />
      </header>

      <section style={{ padding: "1rem 2rem 2rem" }}>
        <div>
          <p>
            Good Morning <b>Dr. Favour</b>{" "}
          </p>
          <p>
            <small style={{ opacity: 0.5 }}>
              Happiness is the highest form of health.
            </small>
          </p>
        </div>
        <div className="doctor-view">
          <div className="patient-appointment-list">
            <h4 style={{ marginBottom: "1rem" }}>Appointment List</h4>
            {patients.map(({ name, type, time }, key) => (
              <AppointmentCard
                name={name}
                type={type}
                time={time}
                key={key}
                border={key !== 0 && "none"}
              />
            ))}
          </div>
          <div>
            <h4 style={{ marginBottom: "1rem" }}>Next patient Summary</h4>
            <NextPatient
              name={"Dell Jackson"}
              info="Male - 28 Years 03 Months"
            />
          </div>
          <div></div>
        </div>
      </section>
    </div>
  )
}
