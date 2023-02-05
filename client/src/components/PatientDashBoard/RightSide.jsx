import React from "react";
import { MedicalRecordCard } from "../MedicalRecordCard";
import { records } from "../../dummyData";

export const RightSide = () => {
  return (
    <div className="dashboard_body-right">
      <div>
        <h3>Your Medical Records</h3>
        <small>This section contains all your medical records.</small>

        <div className="medical-records">
          {records.map((record, key) => (
            <MedicalRecordCard key={key} {...record} />
          ))}
        </div>
      </div>
    </div>
  );
};
