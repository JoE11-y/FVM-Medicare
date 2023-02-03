import React, { useContext, useEffect } from "react";
import { AppointmentCard } from "./AppointmentCard";
import { patients } from "../dummyData";
import { appointmentSummaryContext } from "../context";

export const AppointmentList = ({ acceptedAppointments }) => {
  const { dispatch } = useContext(appointmentSummaryContext);

  useEffect(() => {
    if (patients) {
      dispatch({ type: "SET_APPOINTMENTS", payload: patients });
    }
  }, [dispatch]);
  return (
    <div className="patient-appointment-list">
      <h4 style={{ marginBottom: "1rem" }}>Appointment List</h4>
      {patients.map(
        ({ name, type, time, image, appointmentId, patientAddress }, key) => (
          <AppointmentCard
            name={name}
            type={type}
            time={time}
            key={key}
            image={image}
            border={key !== 0 && "none"}
            appointmentStatus={true}
            index={key}
            appointmentId={appointmentId}
            patientAddress={patientAddress}
          />
        )
      )}
    </div>
  );
};
