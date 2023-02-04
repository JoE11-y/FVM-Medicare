import { Icon, Typography, Box, Modal, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSigner } from "wagmi";
import { makeAppointment } from "../apis/FVMMedicare";
import MedicationIcon from "@mui/icons-material/Medication";
import { sendMessage } from "../apis/PushProtocol";
import { useFVMMedicareContract } from "../hooks";
import { v4 } from "uuid";

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

export const MeetADoctor = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [doctorAddress, setDoctorAddress] = useState("");
  const [message, setMessage] = useState("");
  const [appointmentType, setAppointmentType] = useState(null);

  const { data: signer } = useSigner();

  const contract = useFVMMedicareContract(signer);

  const sendAppointment = async () => {
    if (!message || !appointmentType || !doctorAddress) return;
    const uniqueKey = v4();

    try {
      const Txn = await makeAppointment(
        contract,
        doctorAddress,
        uniqueKey,
        appointmentType
      );

      await Txn.wait();

      await sendMessage(signer.getAddress(), message, doctorAddress, uniqueKey);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div className="send-request">
        <div className="blur">
          <small>Meet a Doctor</small>
          <div className="dash-blur_icon" onClick={handleOpen}>
            <Icon component={MedicationIcon} fontSize="small" />
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h5">
            Schedule a meeting with a Doctor.
          </Typography>
          <TextField
            label="Doctor's Address"
            required
            fullWidth
            sx={{ marginTop: "1rem" }}
            value={doctorAddress}
            onChange={(e) => setDoctorAddress(e.target.value)}
          />
          <TextField
            label="Enter Message"
            multiline
            required
            fullWidth
            sx={{ marginTop: "1rem" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            fullWidth
            sx={{ marginTop: "1rem" }}
            variant="contained"
            onClick={() => console.log(message)}
            //onClick={() => sendAppointment()}
          >
            Send Meeting Request
          </Button>
        </Box>
      </Modal>
    </>
  );
};
