import React from "react"
import "../css/dashboard.css"
import { Logo } from "../components/Logo"
import { DesktopNav } from "../components/DesktopNav"
import { UserIcon } from "../components/UserIcon"
import SearchIcon from "@mui/icons-material/Search"
import AddIcCallIcon from "@mui/icons-material/AddIcCall"
import { Icon } from "@mui/material"

export const PatientDashboard = () => {
  return (
    <div className="dashboard">
      <header className="landingHeader">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo colorTop={"#272F3F"} colorBottom={"#272F3F"} />
          <DesktopNav style={{ borderColor: "#272F3F", color: "#272F3F" }} />
        </div>
        <UserIcon />
      </header>

      <div className="dashboard_body">
        <div className="dashboard_body-left">
          <h2>Welcome Back</h2>
          <h2>Dr. John Doe</h2>
          <div style={{ marginTop: "1.5rem" }}>
            <div className="send-request">
              <div className="blur">
                <small>Find Doctors</small>
                <div className="dash-blur_icon">
                  <Icon component={SearchIcon} fontSize="small" />
                </div>
              </div>
            </div>
            <div className="find-patient">
              <div className="blur">
                <small>Schedule a call</small>
                <div className="dash-blur_icon">
                  {/* <span>+</span> */}
                  <Icon component={AddIcCallIcon} fontSize="small" />
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "4rem 0" }}>
            <h3 style={{ marginBottom: "1rem" }}>
              Requests and Call Appointments
            </h3>
            <div className="status">
              <div className="status-box">
                {/* <Icon component={ListAltIcon} fontSize="large" /> */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    // width: "60%",
                  }}
                >
                  <h3>01</h3>
                  <span>All Requests</span>
                </div>
                <div className="count">+7</div>
              </div>
              <div className="status-box">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    // width: "60%",
                  }}
                >
                  <h3>02</h3>
                  <span>Pending Requests</span>
                </div>
                <div className="count">+18</div>
              </div>
              <div className="status-box">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    // width: "60%",
                  }}
                >
                  <h3>03</h3>
                  <span>Accepted Requests</span>
                </div>
                <div className="count">+6</div>
              </div>
              <div className="status-box">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    // width: "60%",
                  }}
                >
                  <h3>04</h3>
                  <span>Scheduled Meetings</span>
                </div>
                <div className="count">+8</div>
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
