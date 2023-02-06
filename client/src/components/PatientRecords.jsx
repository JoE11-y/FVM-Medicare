import React, { useEffect, useCallback, useState } from "react"
import { Modal } from "@mui/material"
import { useSigner, useProvider } from "wagmi"
import { Box } from "@mui/system"
import { usePatientNFTContract } from "../hooks"
import { downloadNDecryptData } from "../apis/Lighthouse"
import { testPatientData_ } from "../dummyData"
import { MedicalRecordCard } from "./MedicalRecordCard"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80vh",
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  overflowY: "scroll",
}

export const PatientRecords = ({ open, handleClose, appointment }) => {
  const [patientData, setPatientData] = useState({})

  const provider = useProvider()

  const { data: signer, isFetched, isFetching } = useSigner()

  const patientNftContract = usePatientNFTContract(provider)

  const getPatientRecord = useCallback(async () => {
    const patientTokenId = patientNftContract.getTokenId(
      appointment.patientAddress
    )
    const patientCID = patientNftContract.tokenURI(patientTokenId)
    if (isFetched) {
      const data = downloadNDecryptData(patientCID, signer)
      setPatientData(data)
      console.log(data)
    }
  }, [])

  useEffect(() => {
    if (!isFetching) {
      getPatientRecord()
    }
  }, [getPatientRecord, isFetching])

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <h3 style={{ marginBottom: "1rem" }}>Patient Records</h3>
        <div className="medical-records">
          {testPatientData_.map((patientData, key) => (
            <MedicalRecordCard key={key} patientData={patientData} />
          ))}
        </div>
      </Box>
    </Modal>
  )
}
