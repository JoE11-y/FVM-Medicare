import React, { useContext, useState } from "react";
import { useSigner } from "wagmi";
import { VideoCall } from "./VideoCall";
import { appointmentSummaryContext } from "../context";
import { downloadNDecryptData } from "../apis/Lighthouse";
import { PatientRecords } from "./PatientRecords";

export const PatientSummary = () => {
  const colors = ["#ff86ff", "var(--blue)", "var(--mindaro)", "#86ffa4"];
  const [open, setOpen] = useState(false);
  const {
    state: { appointment },
  } = useContext(appointmentSummaryContext);

  const { data: signer, isFetched } = useSigner();

  const [patientData, setPatientData] = useState({});

  const getPatientRecord = async () => {
    const cid = appointment?.cid;
    if (isFetched) {
      const data = downloadNDecryptData(cid, signer);
      setPatientData(data);
    }
  };

  //@frank
  //add button to view to display patient medical record on doctor view.

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
            view
          </small>
        </div>

        <div className="symptoms">
          {appointment?.symptoms?.map((symptom, key) => (
            <div key={key}>
              <div
                className="symptom_color"
                style={{ backgroundColor: colors[key] }}
              ></div>
              <small className="symptom">{symptom}</small>
            </div>
          ))}
        </div>

        <div className="previous-actions">
          <div className="previous-action">
            <h5>Last Checked</h5>
            <small>
              <b>Dr Kimberly</b> on FVM Laboratory in 13 May 2022.
            </small>
          </div>
          <div className="previous-action">
            <h5>Observation</h5>
            <small>
              Three sickle cell patients were sustained at normal hemoglobin
              levels.
            </small>
          </div>
        </div>

        <VideoCall key={appointment?.requestKey} />
      </div>
      <PatientRecords open={open} handleClose={() => setOpen(!open)} />
    </div>
  );
};
