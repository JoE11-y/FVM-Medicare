import React from "react"
import {
  Modal,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Box } from "@mui/system"
import { PatientRecord } from "./PatientRecord"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  maxHeight: "90vh",
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  overflowY: "scroll",
}

export const PatientRecords = ({ open, handleClose, id }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <h3 style={{ marginBottom: "1rem" }}>Patient Records</h3>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Patient Information Leaflet
          </AccordionSummary>
          <AccordionDetails>
            <PatientRecord />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Discharge Summary
          </AccordionSummary>
          <AccordionDetails>
            <PatientRecord />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Modal>
  )
}
