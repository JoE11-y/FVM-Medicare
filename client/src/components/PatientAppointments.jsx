import React, { useState } from "react";
import { PatientsAppointmentsModal } from "./PatientsAppointmentsModal";

export const PatientAppointments = ({ title, index, count, type, onClick }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="status-box" onClick={() => setActive(true)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <h3>0{index}</h3>
          <span style={{ textTransform: "capitalize" }}>{title}</span>
        </div>
        <div className="count">+{count}</div>
      </div>
      <PatientsAppointmentsModal
        handleClose={() => setActive(!active)}
        open={active}
        type={type}
        title={title}
      />
    </>
  );
};
