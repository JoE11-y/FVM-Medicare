import React from "react"
import { Modal } from "@mui/material"
import { patients } from "../dummyData"
import { PatientAppointmentList } from "./PatientAppointmentList"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  maxHeight: "100vh",
  backgroundColor: "#fff",
  boxShadow: 24,
  borderRadius: "10px",
  overflowY: "scroll",
}

export const PatientsAppointmentsModal = ({
  open,
  handleClose,
  type,
  title,
  appointments,
}) => {
  const data = patients
  return (
    <Modal open={open} onClose={handleClose}>
      <div style={style}>
        {type === "scheduled" ? (
          <PatientAppointmentList
            title={title}
            data={data}
            type="scheduled"
            severity="info"
          />
        ) : type === "pending" ? (
          <PatientAppointmentList
            title={title}
            data={data}
            type="pending"
            severity="warning"
          />
        ) : type === "accepted" ? (
          <PatientAppointmentList
            title={title}
            data={data}
            type="accepted"
            severity="success"
          />
        ) : type === "rejected" ? (
          <PatientAppointmentList
            title={title}
            data={data}
            type="rejected"
            severity="error"
          />
        ) : null}
      </div>
    </Modal>
  )
}
