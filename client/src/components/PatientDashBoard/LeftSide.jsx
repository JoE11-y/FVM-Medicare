import React, { useState } from "react";
import { MeetADoctor } from "../MeetADoctor";
import { PatientRequests } from "../PatientRequests";
import { PatientAppointments } from "../PatientAppointments";

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
          <PatientRequests
            title={"accepted requests"}
            count={7}
            index={1}
            type={"accepted"}
          />
          <PatientAppointments
            title={"accepted appointments"}
            count={18}
            index={2}
            type={"accepted"}
          />
          <PatientRequests
            title={"pending requests"}
            count={6}
            index={3}
            type={"pending"}
          />
          <PatientAppointments
            title={"pending appointments"}
            count={2}
            index={4}
            type={"pending"}
          />
          <PatientRequests
            title={"rejected requests"}
            count={6}
            index={5}
            type={"rejected"}
          />
          <PatientAppointments
            title={"rejected appointments"}
            count={2}
            index={6}
            type={"rejected"}
          />
        </div>
      </div>
    </div>
  );
};
