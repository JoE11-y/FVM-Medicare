import patient1 from "./images/patient1.jpg"
import patient2 from "./images/patient2.jpg"
import patient3 from "./images/patient3.jpg"
import patient4 from "./images/patient4.jpg"

export const patients = [
  {
    name: "Dell Jackson",
    appointmentType: "report",
    time: "9.00am",
    symptoms: ["fever", "chest pain", "infection", "dizziness"],
    image: patient1,
    appointmentStatus: 1,
    appointmentId: "10",
    patientAddress: "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
    doctorAddress: "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
    cid: "QmR2EViJjaNJtzEkDMddVhreWVA3cFk58JkFBCwVHq41oM",
    info: "Male - 28 Years 03 Months",
    uniqueKey: "yshsyhsy1",
    requestKey: "yshsyhsy3",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis iure unde voluptatem autem explicabo! Hic voluptatum explicabo tenetur facilis distinctio eaque, modi minima dicta fuga libero veritatis nostrum eum?",
  },
  {
    name: "Sophia Moore",
    appointmentType: "medical checkup",
    time: "10.00am",
    symptoms: ["cough", "catarrh", "cold"],
    image: patient2,
    appointmentStatus: 1,
    appointmentId: "10",
    patientAddress: "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
    doctorAddress: "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
    cid: "QmR2EViJjaNJtzEkDMddVhreWVA3cFk58JkFBCwVHq41oM",
    info: "Male - 28 Years 03 Months",
    uniqueKey: "yshsyhsy2",
    requestKey: "yshsyhsy3",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis iure unde voluptatem autem explicabo! Hic voluptatum explicabo tenetur facilis distinctio eaque, modi minima dicta fuga libero veritatis nostrum eum?",
  },
  {
    name: "Campbell Deschamp",
    appointmentType: "weekly visit",
    time: "2.00pm",
    symptoms: ["fever", "chest pain", "infection", "dizziness"],
    image: patient3,
    appointmentStatus: 2,
    appointmentId: "10",
    patientAddress: "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
    doctorAddress: "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
    cid: "QmR2EViJjaNJtzEkDMddVhreWVA3cFk58JkFBCwVHq41oM",
    info: "Male - 28 Years 03 Months",
    uniqueKey: "yshsyhsy3",
    requestKey: "yshsyhsy3",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis iure unde voluptatem autem explicabo! Hic voluptatum explicabo tenetur facilis distinctio eaque, modi minima dicta fuga libero veritatis nostrum eum?",
  },
  {
    name: "Jesse pep",
    appointmentType: "lab test",
    time: "4.00pm",
    symptoms: ["fever", "chest pain", "infection", "dizziness"],
    image: patient4,
    appointmentStatus: 2,
    appointmentId: "10",
    patientAddress: "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
    doctorAddress: "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
    cid: "QmR2EViJjaNJtzEkDMddVhreWVA3cFk58JkFBCwVHq41oM",
    info: "Male - 28 Years 03 Months",
    uniqueKey: "yshsyhsy4",
    requestKey: "yshsyhsy3",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis iure unde voluptatem autem explicabo! Hic voluptatum explicabo tenetur facilis distinctio eaque, modi minima dicta fuga libero veritatis nostrum eum?",
  },
]

export const doctors = []

export const records = [
  {
    type: "Your Base Data",
    preview: ["Allergies", "Blood Group", "Genotype"],
    updated: "27.01.2023",
    created: "23.01.2020",
  },
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
]
