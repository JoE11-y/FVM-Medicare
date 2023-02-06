import React, { useState } from "react";
import {
  Alert,
  Typography,
  Box,
  Modal,
  AlertTitle,
  TextField,
  FormControl,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSigner, useProvider } from "wagmi";
import { respondToAppointment } from "../apis/FVMMedicare";
import { sendMessage } from "../apis/PushProtocol";
import { useFVMMedicareContract } from "../hooks";
import { IpfsImage } from "react-ipfs-image";

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
  const [loading, setLoading] = useState(false);

  const { data: signer, isFetching } = useSigner();

  const provider = useProvider();

  const contract = useFVMMedicareContract(provider);

  const handleResponse = async () => {
    setLoading(true);
    if (!message && isFetching) return;
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

      if (!toDecline && response !== 204) return;

      const Txn = await respondToAppointment(
        linkedContract,
        appointment.appointmentId,
        !toDecline
      );
      await Txn.wait();
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
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
            <IpfsImage
              hash={
                appointment.image
                  ? appointment.image
                  : "Qme8SriYgGNoXQzG1qYYZKThv3QTBf7pMJwUpu3gqaqQRH"
              }
              gatewayUrl={
                appointment.image
                  ? "https://gateway.lighthouse.storage/ipfs"
                  : "https://gateway.pinata.cloud/ipfs"
              }
            />
            <img src={appointment.image} alt="patient icon" />
          </div>
          <div className="patient-name">
            <p>{appointment.name}</p>
          </div>
        </div>
        <Alert severity="info" style={{ marginTop: "1rem" }}>
          <AlertTitle>Patient's message</AlertTitle>
          {appointment.patientMessage}
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
            <LoadingButton
              variant="contained"
              fullWidth
              sx={{ marginTop: "0.7rem" }}
              size="medium"
              onClick={() => handleResponse()}
              loading={loading}
            >
              Request Medical Records
            </LoadingButton>
          </FormControl>
        ) : (
          <LoadingButton
            variant="contained"
            color="error"
            fullWidth
            sx={{ marginTop: "1rem" }}
            onClick={() => handleResponse()}
            loading={loading}
          >
            Decline Appointment
          </LoadingButton>
        )}
      </Box>
    </Modal>
  );
};
