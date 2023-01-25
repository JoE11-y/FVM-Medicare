import React from "react"
import "../css/dashboard.css"
import { Logo } from "../components/Logo"
import { DesktopNav } from "../components/DesktopNav"
import { UserIcon } from "../components/UserIcon"
import SearchIcon from "@mui/icons-material/Search"
import { Icon } from "@mui/material"

export const PatientDashboard = () => {
  return (
    <div className="dashboard">
      <header className="landingHeader">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo colorTop={"#272F3F"} colorBottom={"#EE6C4D"} />
          <DesktopNav style={{ borderColor: "#272F3F", color: "#272F3F" }} />
        </div>
        <UserIcon />
      </header>

      <div className="dashboard_body">
        <div className="dashboard_body-left">
          <h2>Welcome Back Dr. John Doe</h2>
          <div style={{ marginTop: "1.5rem" }}>
            <div className="send-request">
              <div className="blur">
                <small>Find Your Patient</small>
                <div className="dash-blur_icon">
                  <Icon component={SearchIcon} />
                </div>
              </div>
            </div>
            <div className="find-patient">
              <div className="blur">
                <small>Request Medical Record</small>
                <div className="dash-blur_icon">
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard_body-right"></div>
      </div>
      <div className="dashboard-content"></div>
    </div>
  )
}
