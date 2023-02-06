import { Button, FormControl, TextField } from "@mui/material"
import React, { useState } from "react"
import { useSigner, useProvider } from "wagmi"
import { useFVMMedicareContract } from "../hooks"
import { Logo } from "../components/Logo"
import img from "../images/patient.jpg"
import { uploadFile, uploadEncryptedData } from "../apis/Lighthouse"
import DatePicker from "react-date-picker"
import { useNavigate } from "react-router-dom"

export const PatientRegistration = () => {
  const { data: signer, isFetched } = useSigner()
  const provider = useProvider()
  const navigate = useNavigate()
  const contract = useFVMMedicareContract(provider)

  const [name, setName] = useState("")
  const [dob, setDob] = useState("")
  const [nationality, setNationality] = useState("")
  const [pronouns, setPronouns] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [location, setLocation] = useState("")
  const [imageCid, setImageCid] = useState("")
  const [bGroup, setBGroup] = useState("")
  const [genotype, setGenotype] = useState("")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [allergies, setAllergies] = useState("")
  const [medHistory, setMedHistory] = useState("")
  const [surgHistory, setSurgHistory] = useState("")

  const handleFileUpload = async (e) => {
    if (!isFetched) return
    const output = await uploadFile(e)
    if (!output) return
    setImageCid(output.data.Hash)
  }

  const formNotFilled = () =>
    !(
      name &&
      dob &&
      nationality &&
      pronouns &&
      location &&
      specialization &&
      imageCid &&
      bGroup &&
      genotype &&
      height &&
      weight &&
      allergies &&
      medHistory &&
      surgHistory
    )

  const handleDataUpload = async () => {
    if (formNotFilled && !isFetched) return
    try {
      const linkedContract = contract.connect(signer)
      const data = {
        biodata: {
          name: name,
          dob: dob.getTime(),
          nationality: nationality,
          pronouns: pronouns,
          specialization: specialization,
          imageCid: imageCid,
        },
        medData: {
          bGroup: bGroup,
          genotype: genotype,
          height: height,
          weight: weight,
        },
        allergies: allergies,
        medHistory: medHistory,
        surgHistory: surgHistory,
      }
      const output = await uploadEncryptedData(signer, data)
      if (!output) return
      const uri = output.data.Hash
      const Txn = await linkedContract.register(1, uri, {
        name,
        specialization,
        hospital: "",
        image: imageCid,
      })

      await Txn.wait()

      navigate("/patient-dashboard")
    } catch (e) {
      console.log(e)
    }
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
              value={bGroup}
              onChange={(e) => setBGroup(e.target.value)}
              sx={{ marginBottom: "0.6rem" }}
            />
            <TextField
              label="Genotype"
              fullWidth
              size="small"
              value={genotype}
              onChange={(e) => setGenotype(e.target.value)}
              sx={{ marginBottom: "0.6rem" }}
            />
            <TextField
              label="Height"
              fullWidth
              size="small"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              sx={{ marginBottom: "0.6rem" }}
            />
            <TextField
              label="Weight"
              fullWidth
              size="small"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              sx={{ marginBottom: "0.6rem" }}
            />
            <TextField
              label="Known Allergies"
              fullWidth
              size="large"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              sx={{ marginBottom: "0.6rem" }}
              multiline
            />
            <TextField
              label="Past Medical History"
              fullWidth
              size="large"
              value={medHistory}
              onChange={(e) => setMedHistory(e.target.value)}
              sx={{ marginBottom: "0.6rem" }}
              multiline
            />
            <TextField
              label="Past Surgical History"
              fullWidth
              size="large"
              value={surgHistory}
              onChange={(e) => setSurgHistory(e.target.value)}
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

            <Button
              variant="contained"
              sx={{ marginTop: "1rem" }}
              disabled={formNotFilled()}
              onClick={() => handleDataUpload()}
            >
              Register
            </Button>
          </FormControl>
        </div>
        <div className="reg-img">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}
