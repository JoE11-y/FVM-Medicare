import React from "react";
import { MedicalRecordCard } from "../MedicalRecordCard";

export const RightSide = ({ patientData }) => {
  return (
    <div className="dashboard_body-right">
      <div>
        <h3>Your Medical Records</h3>
        <small>This section contains all your medical records.</small>

        <div className="medical-records">
          {patientData.length !== 0 ? (
            patientData.map((patientData, key) => (
              <MedicalRecordCard key={key} patientData={patientData} />
            ))
          ) : (
            <MedicalRecordCard patientData={{}} />
          )}
        </div>
      </div>
    </div>
  );
};
