import React from "react"
import { Icon, Button } from "@mui/material"
import NotInterestedIcon from "@mui/icons-material/NotInterested"
import { AppointmentModal } from "./AppointmentModal"

export const DeclineAppointment = ({ name, image, msg }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Button onClick={handleOpen} size="small">
        <Icon
          component={NotInterestedIcon}
          color="action"
          cursor={"pointer"}
          fontSize="small"
          sx={{ marginLeft: "0.5rem" }}
        />
      </Button>
      <AppointmentModal
        name={name}
        image={image}
        msg={msg}
        open={open}
        handleClose={handleClose}
        heading="Decline Appointment"
        toDecline={true}
      />
    </>
  )
}
