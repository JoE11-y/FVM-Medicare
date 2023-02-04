import { Alert } from "@mui/material"
import React from "react"

export const PatientRecord = ({
  title,
  doctor_name,
  hostpital,
  date_given,
  subjective,
  objective,
  assessment,
  plan,
}) => {
  return (
    <div className="patient-record">
      <h2 style={{ marginBottom: "1rem" }}>Patient Information Leaflet</h2>
      <h4>Given By: Dr Joe Arteta</h4>
      <h4>Hospital: St. Luke's Medical Center</h4>
      <h4>Date Given: 12/12/2021</h4>
      <div className="record-details">
        <Alert severity="info">
          <strong>Subjective:</strong> The patient reports that she does not
          have any resting shoulder pain and that her shoulder no longer wakes
          her up during the night. She is able to perform her self care and
          dressing with a maximum pain level of 1–2/10. She is able to complete
          all of her required I-ADLs without significant pain or limitation. She
          reports that doing her home exercises in the morning and evening is
          helping her progress.
        </Alert>
      </div>
      <div className="record-details">
        <Alert severity="info">
          <strong>Objective:</strong> Upon retesting the DASH, the patient
          achieved a score of 15. Her range of motion and strength are
          functional for her age and activity level.
        </Alert>
      </div>
      <div className="record-details">
        <Alert severity="info">
          <strong>Assessment:</strong> The patient has achieved the goals
          established in the plan of care and will be discharged with a home
          exercise program.
        </Alert>
      </div>
      <div className="record-details">
        <Alert severity="info">
          <strong>Plan:</strong> The patient will continue with her home program
          and will see her physician in two weeks to follow up. A separate
          report will be forwarded to the physician.
        </Alert>
      </div>
    </div>
  )
}
