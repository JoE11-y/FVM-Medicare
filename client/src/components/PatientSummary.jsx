import React, { useContext, useState } from "react";
import { useSigner } from "wagmi";
import { VideoCall } from "./VideoCall";
import { appointmentSummaryContext } from "../context";
import { PatientRecords } from "./PatientRecords";

export const PatientSummary = () => {
  const colors = ["#ff86ff", "var(--blue)", "var(--mindaro)", "#86ffa4"];
  const [open, setOpen] = useState(false);
  const {
    state: { appointment },
  } = useContext(appointmentSummaryContext);

  const { data: signer, isFetched } = useSigner();

  return (
    <div>
      <h4 style={{ marginBottom: "1rem" }}>Patient Summary</h4>
      <div className="patient-summary">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 4fr 1fr",
            alignItems: "center",
          }}
        >
          <div
            className="appointment-img"
            style={{ border: "none", width: "3.6rem", height: "3.6rem" }}
          >
            <img src={appointment?.image} alt="patient icon" />
          </div>
          <div className="patient-name">
            <p>{appointment?.name}</p>
            <small style={{ opacity: 0.5, fontWeight: "bold" }}>
              {appointment?.info}
            </small>
          </div>
          <small
            style={{ color: "#EF798A", fontWeight: "bold", cursor: "pointer" }}
            onClick={() => setOpen(true)}
          >
            View Record
          </small>
        </div>

        <div className="previous-actions">
          <div className="previous-action">
            <h5>Patient Message</h5>
            <small>{appointment.message}</small>
          </div>
          <div className="previous-action">
            <h5>Your Message</h5>
            <small>{appointment.doctorMessage}.</small>
          </div>
        </div>

        <VideoCall meetId={appointment?.appointmentKey} />
      </div>
      <PatientRecords
        open={open}
        appointment={appointment}
        handleClose={() => setOpen(!open)}
      />
    </div>
  );
};
