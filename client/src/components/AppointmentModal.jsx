import React, { useState } from "react";
import {
  Alert,
  Typography,
  Box,
  Modal,
  AlertTitle,
  TextField,
  Button,
  FormControl,
} from "@mui/material";
import { useSigner, useProvider } from "wagmi";
import { respondToAppointment } from "../apis/FVMMedicare";
import { sendMessage } from "../apis/PushProtocol";
import { useFVMMedicareContract } from "../hooks";

export const AppointmentModal = ({
  appointment,
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
  };
  const [message, setMessage] = useState("");

  const { data: signer, isFetching } = useSigner();

  const provider = useProvider();

  const contract = useFVMMedicareContract(provider);

  const handleResponse = async () => {
    if (!message && !toDecline && isFetching) return;
    let response;
    try {
      const linkedContract = contract.connect(signer);
      const address = await signer.getAddress();
      if (!toDecline) {
        response = await sendMessage(
          address,
          message,
          appointment.patientAddress,
          appointment.uniqueKey
        );
      }

      if (!toDecline && response.status !== 204) return;

      const Txn = await respondToAppointment(
        linkedContract,
        appointment.appointmentId,
        toDecline
      );
      await Txn.wait();
    } catch (e) {
      console.log(e.message);
    }
  };
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
            <img src={appointment.image} alt="patient icon" />
          </div>
          <div className="patient-name">
            <p>{appointment.name}</p>
          </div>
        </div>
        <Alert severity="info" style={{ marginTop: "1rem" }}>
          <AlertTitle>Patient's message</AlertTitle>
          {appointment.message}
        </Alert>
        {!toDecline ? (
          <FormControl fullWidth>
            <TextField
              fullWidth
              label="Request Medical Records"
              required
              multiline
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{ marginTop: "1rem" }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ marginTop: "0.7rem" }}
              size="medium"
              onClick={() => console.log(message)}
              // onClick={() => handleResponse()}
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
            // onClick={() => handleResponse()}
          >
            Decline Appointment
          </Button>
        )}
      </Box>
    </Modal>
  );
};
