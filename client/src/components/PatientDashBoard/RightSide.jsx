import React from "react"
import { MedicalRecordCard } from "../MedicalRecordCard"
import { testPatientData_ } from "../../dummyData"

export const RightSide = ({ patientData }) => {
  return (
    <div className="dashboard_body-right">
      <div>
        <h3>Your Medical Records</h3>
        <small>This section contains all your medical records.</small>

        <div className="medical-records">
          {testPatientData_.map((patientData, key) => (
            <MedicalRecordCard key={key} patientData={patientData} />
          ))}
        </div>
      </div>
    </div>
  )
}
