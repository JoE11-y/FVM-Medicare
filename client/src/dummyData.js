import patient1 from "./images/patient1.jpg"
import patient2 from "./images/patient2.jpg"
import patient3 from "./images/patient3.jpg"
import patient4 from "./images/patient4.jpg"

export const patients = [
  {
    name: "Dell Jackson",
    type: "report",
    time: "9.00am",
    symptoms: ["fever", "chest pain", "infection", "dizziness"],
    image: patient1,
  },
  {
    name: "Sophia Moore",
    type: "medical checkup",
    time: "10.00am",
    symptoms: ["cough", "catarrh", "cold"],
    image: patient2,
  },
  {
    name: "Campbell Deschamp",
    type: "weekly visit",
    time: "2.00pm",
    symptoms: ["fever", "chest pain", "infection", "dizziness"],
    image: patient3,
  },
  {
    name: "Jesse pep",
    type: "lab test",
    time: "4.00pm",
    symptoms: ["fever", "chest pain", "infection", "dizziness"],
    image: patient4,
  },
]

export const doctors = []

export const records = [
  {
    type: "Patient Information Leaflet",
    preview: ["Pharmacy", "Medicine Side Effects", "dosage"],
    updated: "27.01.2023",
    created: "23.01.2020",
  },
  {
    type: "Previous Discharge Summary",
    preview: ["Test Result", "Reason for admission", "medical advice"],
    updated: "27.01.2023",
    created: "23.01.2020",
  },
  {
    type: "Recent Medical Test",
    preview: ["Blood Test", "Urine Test", "Heart Test"],
    updated: "27.01.2023",
    created: "23.01.2020",
  },
  {
    type: "Mental Status Examination",
    preview: ["Mental Health", "Hospital", "Rehab summary"],
    updated: "27.01.2023",
    created: "23.01.2020",
  },
  {
    type: "Operative Report",
    preview: ["Surgical Operation", "Procedures", "Complications"],
    updated: "27.01.2023",
    created: "23.01.2020",
  },
  {
    type: "Medical Record History",
    preview: ["Notes and Remarks", "Prescription", "Doctor"],
    updated: "27.01.2023",
    created: "23.01.2020",
  },
]
