import React from "react";
import { Icon, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { AppointmentModal } from "./AppointmentModal";

export const AcceptAppointment = ({ appointment }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen} size="small">
        <Icon
          component={CheckIcon}
          color="success"
          fontSize="small"
          cursor={"pointer"}
        />
      </Button>
      <AppointmentModal
        appointment={appointment}
        open={open}
        handleClose={handleClose}
        heading="Accept Appointment"
        toDecline={false}
      />
    </>
  );
};
