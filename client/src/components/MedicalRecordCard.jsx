import { Button } from "@mui/material"
import React from "react"

export const MedicalRecordCard = ({ type, preview = [], updated, created }) => {
  return (
    <div className="medical-record_card">
      <h4>{type}</h4>
      <div style={{ padding: "1.2rem" }}>
        <div>
          {preview.map((item) => (
            <p className="record-item_preview">{item}</p>
          ))}
        </div>
        <div className="medical-record_card-timeline">
          <div>
            <p>Updated</p>
            <small>{updated}</small>
          </div>
          <div style={{ marginLeft: "2rem" }}>
            <p>Created</p>
            <small>{created}</small>
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
