import { Button } from "@mui/material"
import React from "react"

export const MedicalRecordCard = () => {
  return (
    <div className="medical-record_card">
      <h4>Medical Record</h4>
      <div style={{ padding: "1.2rem" }}>
        <div>
          <p className="record-item_preview">Allergies</p>
          <p className="record-item_preview">Immunizations</p>
          <p className="record-item_preview">Medical Conditions</p>
        </div>
        <div className="medical-record_card-timeline">
          <div>
            <p>Updated</p>
            <small>27.01.2023</small>
          </div>
          <div style={{ marginLeft: "2rem" }}>
            <p>Created</p>
            <small>27.01.2023</small>
          </div>
        </div>

        <Button
          variant="contained"
          sx={{ width: "100%", backgroundColor: "#010211", padding: "0.8rem" }}
          size="small"
        >
          Open
        </Button>
      </div>
    </div>
  )
}
