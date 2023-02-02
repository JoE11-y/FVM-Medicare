import React, { useContext } from "react"
import { VideoCall } from "./VideoCall"
import { patientSummaryContext } from "../context"

export const PatientSummary = ({ name, info }) => {
  const colors = ["#ff86ff", "var(--blue)", "var(--mindaro)", "#86ffa4"]
  const { state } = useContext(patientSummaryContext)
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
            <img src={state.image} alt="patient icon" />
          </div>
          <div className="patient-name">
            <p>{state.name}</p>
            <small style={{ opacity: 0.5, fontWeight: "bold" }}>{info}</small>
          </div>
          <small
            style={{ color: "#EF798A", fontWeight: "bold", cursor: "pointer" }}
          >
            view
          </small>
        </div>

        <div className="symptoms">
          {state.symptoms.map((symptom, key) => (
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

        <VideoCall isTime={true} />
      </div>
    </div>
  )
}
