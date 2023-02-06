import React from "react";
import { Icon } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

export const MedicalRecordCard = ({ patientData }) => {
  return (
    <div className="medical-record_card">
      {patientData ? (
        <>
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
              ) : patientData.type === "Basic Data" ||
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
        </>
      ) : (
        <p style={{ padding: "20px" }}>
          <Icon
            component={InfoIcon}
            color="info"
            fontSize="small"
            cursor={"pointer"}
          />{" "}
          No Data
        </p>
      )}
    </div>
  );
};
