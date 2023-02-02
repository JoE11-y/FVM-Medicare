import React from "react"
import { DesktopNav } from "../components/DesktopNav"
import { Logo } from "../components/Logo"
import { Icon } from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import MedicationIcon from "@mui/icons-material/Medication"
import { Link } from "react-router-dom"

export const ChooseUser = () => {
  return (
    <div style={{ backgroundColor: "#e0e0e0", minHeight: "100vh" }}>
      <header className="landingHeader">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo colorTop={"#272F3F"} colorBottom={"#272F3F"} />
          <DesktopNav style={{ borderColor: "#272F3F", color: "#272F3F" }} />
        </div>
      </header>

      <p style={{ textAlign: "center", marginTop: "3rem" }}>
        Register as a Patient or a Doctor.
      </p>
      <section className="choose-user">
        <Link
          to={"patient-form"}
          className="doctor-patient"
          style={{ color: "var(--gunmetal)" }}
        >
          <Icon component={AccountCircleIcon} fontSize="large" />
          <p>As Patient</p>
        </Link>
        <Link to={"doctor-form"} className="doctor-patient">
          <Icon component={MedicationIcon} fontSize="large" />
          <p>As Doctor</p>
        </Link>
      </section>
    </div>
  )
}
