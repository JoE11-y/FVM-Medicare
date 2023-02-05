import { Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSigner, useProvider } from "wagmi";
import { useFVMMedicareContract } from "../hooks";
import { Logo } from "../components/Logo";
import { uploadFile, uploadEncryptedData } from "../apis/Lighthouse";

export const DoctorRegistration = () => {
  const { data: signer, isFetched } = useSigner();
  const provider = useProvider();
  const contract = useFVMMedicareContract(provider);

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [nationality, setNationality] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [hospital, setHospital] = useState("");
  const [location, setLocation] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [imageCid, setImageCid] = useState("");
  const [docCID, setDocCID] = useState("");

  const handleFileUpload = async (e, file) => {
    const output = await uploadFile(e);
    if (!output.isSuccess) return;
    if (file === "image") setImageCid(output.data.Hash);
    if (file === "doc") setDocCID(output.data.Hash);
  };

  const formNotFilled = () =>
    !(
      name &&
      dob &&
      nationality &&
      pronouns &&
      hospital &&
      location &&
      specialization &&
      imageCid &&
      docCID
    );

  const handleDataUpload = async () => {
    if (formNotFilled && !isFetched) return;
    try {
      const linkedContract = contract.connect(signer);
      const data = {
        name: name,
        dob: dob,
        nationality: nationality,
        pronouns: pronouns,
        hospital: hospital,
        specialization: specialization,
        imageCid: imageCid,
        docCid: docCID,
      };

      const output = await uploadEncryptedData(signer, data);
      if (!output.isSuccess) return;
      const uri = output.data.Hash;
      const Txn = await linkedContract.register(0, uri, {
        name,
        specialization,
        hospital,
        image: imageCid,
      });

      await Txn.wait();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className="reg-page">
        <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
          <Logo colorTop={"#272F3F"} colorBottom={"#272F3F"} />
        </div>
        <div className="reg-form">
          <h2>Sign up as a Doctor</h2>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Enter Name"
              fullWidth
              size="small"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              sx={{ marginBottom: "0.6rem" }}
            />
            <TextField
              label="Date of Birth"
              fullWidth
              size="small"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              sx={{ marginBottom: "0.6rem" }}
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
              label="Name of Hospital"
              fullWidth
              size="small"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
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
              label="Specialization"
              fullWidth
              size="small"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              sx={{ marginBottom: "0.6rem" }}
            />
            <div>
              <label htmlFor="doctor-picture" style={{ display: "block" }}>
                Profile Picture
              </label>
              <input
                type={"file"}
                id="doctor-picture"
                onChange={(e) => handleFileUpload(e, "image")}
              />
            </div>
            <div>
              <label
                htmlFor="cop-picture"
                style={{ display: "block", marginTop: "0.6rem" }}
              >
                Certificate of Practice
              </label>
              <input
                type={"file"}
                id="cop-picture"
                onChange={(e) => handleFileUpload(e, "doc")}
              />
            </div>
            <Button
              variant="contained"
              sx={{ marginTop: "1rem" }}
              disabled={formNotFilled()}
              // onClick={() => handleDataUpload()}
            >
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
  );
};
