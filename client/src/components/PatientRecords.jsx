import React from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { testPatientData_ } from "../dummyData";
import { MedicalRecordCard } from "./MedicalRecordCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80vh",
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  overflowY: "scroll",
};

export const PatientRecords = ({ open, handleClose, _patientData }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <h3 style={{ marginBottom: "1rem" }}>Patient Records</h3>
        <div className="medical-records">
          {testPatientData_.map((patientData, key) => (
            <MedicalRecordCard key={key} patientData={patientData} />
          ))}
        </div>
      </Box>
    </Modal>
  );
};
