import React from "react"
import "../css/dashboard.css"
import { Logo } from "../components/Logo"
import { DesktopNav } from "../components/DesktopNav"
import { UserIcon } from "../components/UserIcon"

export const PatientDashboard = () => {
  return (
    <div className="dashboard">
      <header className="landingHeader">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo colorTop={"#272F3F"} colorBottom={"#d9e900"} />
          <DesktopNav style={{ borderColor: "#272F3F", color: "#272F3F" }} />
        </div>
        <UserIcon />
      </header>
      <div className="dashboard-content"></div>
    </div>
  )
}
