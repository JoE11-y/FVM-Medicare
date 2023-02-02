import React from "react"
import { MeetADoctor } from "../MeetADoctor"

export const LeftSide = () => {
  return (
    <div className="dashboard_body-left">
      <h2>Welcome Back</h2>
      <h2>John Doe</h2>
      <div style={{ marginTop: "1.5rem" }}>
        <MeetADoctor />
      </div>
      <div style={{ margin: "3.5rem 0" }}>
        <h3 style={{ marginBottom: "1rem" }}>Requests and Call Appointments</h3>
        <div className="status">
          <div className="status-box">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
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
  )
}
