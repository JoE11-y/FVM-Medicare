import {
  Button,
  FormControl,
  Select,
  TextField,
  MenuItem,
  InputLabel,
} from "@mui/material"
import React from "react"
import { Logo } from "../components/Logo"

export const PatientRegistration = () => {
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
              label="Fullname"
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
              label="Occupation"
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
              label="Blood Group"
              fullWidth
              size="small"
              sx={{ marginBottom: "0.6rem" }}
            />
            <TextField
              label="Genotype"
              fullWidth
              size="small"
              sx={{ marginBottom: "0.6rem" }}
            />
            <TextField
              label="Height"
              fullWidth
              size="small"
              sx={{ marginBottom: "0.6rem" }}
            />
            <TextField
              label="Weight"
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
