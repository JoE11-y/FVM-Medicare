import { Button, FormControl, FormControlLabel, TextField } from "@mui/material"
import React from "react"
import { Logo } from "../components/Logo"

export const DoctorRegistration = () => {
  return (
    <div>
      <div className="reg-page">
        <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
          <Logo colorTop={"#272F3F"} colorBottom={"#272F3F"} />
          {/* <DesktopNav style={{ borderColor: "#272F3F", color: "#272F3F" }} /> */}
        </div>
        <div className="reg-form">
          <h2>Sign up as a Doctor</h2>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Enter Name"
              fullWidth
              size="small"
              sx={{ marginBottom: "0.6rem" }}
            />
            <TextField
              label="Date of Birth"
              fullWidth
              size="small"
              sx={{ marginBottom: "0.6rem" }}
            />
            <TextField
              label="Nationality"
              fullWidth
              size="small"
              sx={{ marginBottom: "0.6rem" }}
            />
            <TextField
              label="Pronouns"
              fullWidth
              size="small"
              sx={{ marginBottom: "0.6rem" }}
            />
            <TextField
              label="Name of Hospital"
              fullWidth
              size="small"
              sx={{ marginBottom: "0.6rem" }}
            />
            <TextField
              label="Address/Location"
              fullWidth
              size="small"
              sx={{ marginBottom: "0.6rem" }}
            />
            <TextField
              label="Specialization"
              fullWidth
              size="small"
              sx={{ marginBottom: "0.6rem" }}
            />
            <div>
              <label htmlFor="doctor-picture" style={{ display: "block" }}>
                Image
              </label>
              <input type={"file"} id="doctor-picture" />
            </div>
            <div>
              <label
                htmlFor="cop-picture"
                style={{ display: "block", marginTop: "0.6rem" }}
              >
                Certificate of Practice
              </label>
              <input type={"file"} id="cop-picture" />
            </div>
            <Button variant="contained" sx={{ marginTop: "1rem" }}>
              Register
            </Button>
          </FormControl>
        </div>
        <div className="reg-ball">
          <div className="ball"></div>
          <div className="blur-ball"></div>
        </div>
      </div>
    </div>
  )
}
