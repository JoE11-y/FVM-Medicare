import React from "react"
import { Icon, Button, Typography, Box, Modal } from "@mui/material"

export const AppointmentModal = ({
  name,
  image,
  msg,
  open,
  handleClose,
  heading,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {heading}
        </Typography>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 4fr",
            alignItems: "center",
          }}
        >
          <div
            className="appointment-img"
            style={{ border: "none", width: "3.6rem", height: "3.6rem" }}
          >
            <img src={image} alt="patient icon" />
          </div>
          <div className="patient-name">
            <p>{name}</p>
          </div>
        </div>
      </Box>
    </Modal>
  )
}
