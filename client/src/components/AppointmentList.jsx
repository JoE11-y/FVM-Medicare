import React, { useContext, useEffect } from "react";
import { AppointmentCard } from "./AppointmentCard";
import { appointmentSummaryContext } from "../context";
import { Icon } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

export const AppointmentList = ({ acceptedAppointments }) => {
  const { dispatch } = useContext(appointmentSummaryContext);
  const appointments = acceptedAppointments;
  useEffect(() => {
    if (acceptedAppointments.length !== 0) {
      dispatch({ type: "SET_APPOINTMENTS", payload: acceptedAppointments });
    }
  }, [dispatch, acceptedAppointments]);
  return (
    <div className="patient-appointment-list">
      <h4 style={{ marginBottom: "1rem" }}>Appointment List</h4>
      {appointments.length !== 0 ? (
        appointments.map((appointment, key) => (
          <AppointmentCard
            key={key}
            appointment={appointment}
            border={key !== 0 && "none"}
            index={key}
          />
        ))
      ) : (
        <p style={{ padding: "20px" }}>
          <Icon
            component={InfoIcon}
            color="info"
            fontSize="small"
            cursor={"pointer"}
          />{" "}
          No Scheduled Appoinments
        </p>
      )}
    </div>
  );
};
