import React from "react";
import { Modal, Button, Alert, Icon } from "@mui/material";
import { patients } from "../dummyData";
import { RequestList } from "./RequestList";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxHeight: "80vh",
  backgroundColor: "#fff",
  boxShadow: 24,
  borderRadius: "10px",
  overflowY: "scroll",
};

const doctors = patients;

export const PatientRequestsModal = ({ open, handleClose, type, title }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div style={style}>
        {type === "pending" ? (
          <RequestList title={title} data={doctors} severity="warning" />
        ) : type === "accepted" ? (
          <RequestList title={title} data={doctors} severity="success" />
        ) : type === "rejected" ? (
          <RequestList title={title} data={doctors} severity="error" />
        ) : null}
      </div>
    </Modal>
  );
};
