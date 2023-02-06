import React from "react";

export const MedicalRecordCard = ({ patientData }) => {
  return (
    <div className="medical-record_card">
      <h4>{patientData.type}</h4>
      <div style={{ padding: "1.2rem" }}>
        <div>
          {patientData.type === "Medical History" ||
          patientData.type === "Surgical History" ||
          patientData.type === "Allergies" ? (
            patientData.data.split(",").map((item, key) => (
              <p key={key} className="record-item_preview">
                {item}
              </p>
            ))
          ) : patientData.type === "Medical Data" ||
            patientData.type === "Bio Data" ? (
            Object.values(patientData.data).map((item, key) => (
              <p key={key} className="record-item_preview">
                {Object.keys(patientData.data)[key]}: {item}
              </p>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
