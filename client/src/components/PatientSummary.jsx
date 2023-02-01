import React from "react"
import doctor from "../images/doctor.jpg"

export const PatientSummary = ({ name, info }) => {
  const data = [
    { color: "#ff86ff", symptom: "fever" },
    { color: "var(--blue)", symptom: "chest pain" },
    { color: "var(--mindaro)", symptom: "infection" },
    { color: "#86ffa4", symptom: "dry eyes" },
  ]
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
            <img src={doctor} alt="patient icon" />
          </div>
          <div className="patient-name">
            <p>{name}</p>
            <small style={{ opacity: 0.5, fontWeight: "bold" }}>{info}</small>
          </div>
          <small
            style={{ color: "#EF798A", fontWeight: "bold", cursor: "pointer" }}
          >
            view
          </small>
        </div>

        <div className="symptoms">
          {data.map(({ color, symptom }, key) => (
            <div key={key}>
              <div
                className="symptom_color"
                style={{ backgroundColor: color }}
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
      </div>
    </div>
  )
}
