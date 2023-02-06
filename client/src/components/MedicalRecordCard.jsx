import { Modal } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { PatientRecord } from "./PatientRecord"

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
  )
}

const MedicalRecordModal = ({ open, handleClose, id }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    maxHeight: "90vh",
    bgcolor: "#fff",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    overflowY: "scroll",
  }
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <PatientRecord />
      </Box>
    </Modal>
  )
}
