import { Icon, Typography, Box, Modal, Button, TextField } from "@mui/material"
import React from "react"
import MedicationIcon from "@mui/icons-material/Medication"

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

export const MeetADoctor = () => {
  const [open, setOpen] = React.useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
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
            label="Doctor's ID"
            required
            fullWidth
            sx={{ marginTop: "1rem" }}
          />
          <TextField
            label="Enter Message"
            multiline
            required
            fullWidth
            sx={{ marginTop: "1rem" }}
          />
          <Button fullWidth sx={{ marginTop: "1rem" }} variant="contained">
            Send Meeting Request
          </Button>
        </Box>
      </Modal>
    </>
  )
}
