import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { PatientRecord } from "./PatientRecord";

export const MedicalRecordCard = ({ type, preview = [], updated, created }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="medical-record_card">
      <h4>{type}</h4>
      <div style={{ padding: "1.2rem" }}>
        <div>
          {preview.map((item, key) => (
            <p key={key} className="record-item_preview">
              {item}
            </p>
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
          onClick={() => setOpen(true)}
        >
          Open
        </Button>
      </div>
      <MedicalRecordModal open={open} handleClose={() => setOpen(!open)} />
    </div>
  );
};

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
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <PatientRecord />
      </Box>
    </Modal>
  );
};
