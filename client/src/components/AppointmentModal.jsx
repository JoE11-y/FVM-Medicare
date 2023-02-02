import React from "react"
import {
  Alert,
  Typography,
  Box,
  Modal,
  AlertTitle,
  TextField,
  Button,
  FormControl,
} from "@mui/material"

export const AppointmentModal = ({
  name,
  image,
  msg,
  open,
  handleClose,
  heading,
  toDecline,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h5">
          {heading}
        </Typography>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 4fr",
            alignItems: "center",
            marginTop: "1rem",
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
        <Alert severity="info" style={{ marginTop: "1rem" }}>
          <AlertTitle>Patient's message</AlertTitle>
          {msg}
        </Alert>
        {!toDecline ? (
          <FormControl fullWidth>
            <TextField
              fullWidth
              label="Request Medical Records"
              required
              multiline
              sx={{ marginTop: "1rem" }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ marginTop: "0.7rem" }}
              size="medium"
              onSubmit={() => console.log("Request Medical Records")}
            >
              Request Medical Records
            </Button>
          </FormControl>
        ) : (
          <Button
            variant="contained"
            color="error"
            fullWidth
            sx={{ marginTop: "1rem" }}
          >
            Decline Appointment
          </Button>
        )}
      </Box>
    </Modal>
  )
}
