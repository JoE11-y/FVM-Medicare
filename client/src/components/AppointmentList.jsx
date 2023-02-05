import React, { useContext, useEffect } from "react";
import { AppointmentCard } from "./AppointmentCard";
import { patientsAccepted } from "../dummyData";
import { appointmentSummaryContext } from "../context";

export const AppointmentList = ({ acceptedAppointments }) => {
  const { dispatch } = useContext(appointmentSummaryContext);
  const appointments = patientsAccepted;
  useEffect(() => {
    if (patientsAccepted) {
      dispatch({ type: "SET_APPOINTMENTS", payload: patientsAccepted });
    }
  }, [dispatch]);
  return (
    <div className="patient-appointment-list">
      <h4 style={{ marginBottom: "1rem" }}>Appointment List</h4>
      {appointments.map((appointment, key) => (
        <AppointmentCard
          key={key}
          appointment={appointment}
          border={key !== 0 && "none"}
          index={key}
        />
      ))}
    </div>
  );
};
