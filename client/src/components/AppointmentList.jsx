import React, { useContext, useEffect } from "react";
import { AppointmentCard } from "./AppointmentCard";
import { patients } from "../dummyData";
import { appointmentSummaryContext } from "../context";

export const AppointmentList = ({ acceptedAppointments }) => {
  const { dispatch } = useContext(appointmentSummaryContext);
  const appointments = patients;
  useEffect(() => {
    if (patients) {
      dispatch({ type: "SET_APPOINTMENTS", payload: patients });
    }
  }, [dispatch]);
  return (
    <div className="patient-appointment-list">
      <h4 style={{ marginBottom: "1rem" }}>Appointment List</h4>
      {appointments.map((appointment, key) => (
        <AppointmentCard
          appointment={appointment}
          border={key !== 0 && "none"}
          index={key}
        />
      ))}
    </div>
  );
};
