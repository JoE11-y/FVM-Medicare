import React from "react"
import { DesktopNav } from "../components/DesktopNav"
import { Logo } from "../components/Logo"
import { UserIcon } from "../components/UserIcon"
import { PatientSummary } from "../components/PatientSummary"
import { RequestMedicalData } from "../components/RequestMedicalData"
import { AppointmentList } from "../components/AppointmentList"
import { DoctorPendingAppointment } from "../components/DoctorPendingAppointment"

export const DoctorDashboard = () => {
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
          <AppointmentList />
          <PatientSummary
            name={"Dell Jackson"}
            info="Male - 28 Years 03 Months"
          />
          <DoctorPendingAppointment />
        </div>
      </section>
    </div>
  )
}
