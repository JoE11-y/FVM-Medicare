import { Button, FormControl, TextField } from "@mui/material"
import React, { useState } from "react"
import { useSigner, useProvider } from "wagmi"
import { useFVMMedicareContract } from "../hooks"
import { Logo } from "../components/Logo"
import { uploadFile, uploadEncryptedData } from "../apis/Lighthouse"
import DatePicker from "react-date-picker"

export const PatientRegistration = () => {
  const { data: signer, isFetched } = useSigner()
  const provider = useProvider()
  const contract = useFVMMedicareContract(provider)

  const [name, setName] = useState("")
  const [dob, setDob] = useState("")
  const [nationality, setNationality] = useState("")
  const [pronouns, setPronouns] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [location, setLocation] = useState("")
  const [imageCid, setImageCid] = useState("")

  const handleFileUpload = async (e) => {
    const output = await uploadFile(e)
    if (!output.isSuccess) return
    setImageCid(output.data.Hash)
  }

  return (
    <div>
      <div className="reg-page">
        <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
          <Logo colorTop={"#272F3F"} colorBottom={"#272F3F"} />
          {/* <DesktopNav style={{ borderColor: "#272F3F", color: "#272F3F" }} /> */}
        </div>
        <div className="reg-form">
          <h2>Sign up as a Patient</h2>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Fullname"
              fullWidth
              size="small"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              sx={{ marginBottom: "0.6rem" }}
            />

            <DatePicker
              onChange={setDob}
              value={dob}
              className="date-picker"
              name="DOB"
            />
            <TextField
              label="Nationality"
              fullWidth
              size="small"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              sx={{ marginBottom: "0.6rem" }}
            />
            <TextField
              label="Pronouns"
              fullWidth
              size="small"
              value={pronouns}
              onChange={(e) => setPronouns(e.target.value)}
              sx={{ marginBottom: "0.6rem" }}
            />
            <TextField
              label="Occupation"
              fullWidth
              size="small"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              sx={{ marginBottom: "0.6rem" }}
            />
            <TextField
              label="Address/Location"
              fullWidth
              size="small"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
            <TextField
              label="Known Allergies"
              fullWidth
              size="small"
              sx={{ marginBottom: "0.6rem" }}
              multiline
            />
            <TextField
              label="Past Medical History"
              fullWidth
              size="small"
              sx={{ marginBottom: "0.6rem" }}
              multiline
            />
            <TextField
              label="Past Surgical History"
              fullWidth
              size="small"
              sx={{ marginBottom: "0.6rem" }}
              multiline
            />

            <div>
              <label htmlFor="doctor-picture" style={{ display: "block" }}>
                Profile Picture
              </label>
              <input
                type={"file"}
                id="doctor-picture"
                onChange={(e) => handleFileUpload(e)}
              />
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
