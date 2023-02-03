import React from "react"
import {
  Alert,
  AlertTitle,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material"
import img from "../images/doctor.jpg"
import { useParams } from "react-router-dom"
import { Logo } from "../components/Logo"
import { DesktopNav } from "../components/DesktopNav"
import { UserIcon } from "../components/UserIcon"

export const SelectMedicalRecords = () => {
  const { id } = useParams()
  console.log(id)
  // Fetch data from the backend with the URL param(id)
  return (
    <div>
      <header className="landingHeader">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo colorTop={"#272F3F"} colorBottom={"var(--blue)"} />
          <DesktopNav style={{ borderColor: "#272F3F", color: "#272F3F" }} />
        </div>
        <UserIcon />
      </header>
      <div
        className="doctor-request"
        style={{
          backgroundColor: "#fff",
          margin: "1rem 2rem",
          paddingBottom: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <div className="appointment-img">
            <img src={img} alt="doctor" />
          </div>
          <div className="doctor-name">
            <h3>John Doe</h3>
          </div>
        </div>
        <div className="doctor-message">
          <Alert severity="info">
            <AlertTitle>Doctor's Request</AlertTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              similique. Quibusdam ducimus laboriosam aperiam at cum, harum
              ullam vel aspernatur. Repellat odio veniam consectetur
              necessitatibus tempore a soluta et impedit?
            </p>
          </Alert>
        </div>

        <div style={{ padding: "1rem" }}>
          <h4 style={{ marginBottom: "1rem" }}>Select Medical Records</h4>
          <FormGroup
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridGap: "1rem",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="Previous Discharge Summary"
              sx={{
                borderLeft: "1px solid var(--green)",
                bgcolor: "var(--light)",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Patient Information Leaflet"
              sx={{
                borderLeft: "1px solid var(--green)",
                bgcolor: "var(--light)",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Recent Medical Test"
              sx={{
                borderLeft: "1px solid var(--green)",
                bgcolor: "var(--light)",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Mental Status Examination"
              sx={{
                borderLeft: "1px solid var(--green)",
                bgcolor: "var(--light)",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Operaative Reports"
              sx={{
                borderLeft: "1px solid var(--green)",
                bgcolor: "var(--light)",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Medical Record History"
              sx={{
                borderLeft: "1px solid var(--green)",
                bgcolor: "var(--light)",
              }}
            />
          </FormGroup>
          <div style={{ marginTop: "1rem" }}>
            <Button color="success">Accept</Button>
            <Button variant="contained" color="error">
              Decline
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
