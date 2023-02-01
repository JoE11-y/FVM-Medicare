import React from "react"
import { MedicalRecordCard } from "../MedicalRecordCard"

export const RightSide = () => {
  return (
    <div className="dashboard_body-right">
      <div>
        <h3>Your Medical Records</h3>
        <small>This section contains all your medical records.</small>

        <div className="medical-records">
          <MedicalRecordCard />
          <MedicalRecordCard />
          <MedicalRecordCard />
        </div>
      </div>
    </div>
  )
}
