import patient1 from "./images/patient1.jpg";
import patient2 from "./images/patient2.jpg";
import patient3 from "./images/patient3.jpg";
import patient4 from "./images/patient4.jpg";

export const patients = [
  {
    name: "Dell Jackson",
    appointmentType: "report",
    time: "9.00am",
    symptoms: ["fever", "chest pain", "infection", "dizziness"],
    image: patient1,
    hospital: "Saint Patricks",
    specialization: "Surgeon",
    appointmentStatus: 1,
    appointmentId: "10",
    patientAddress: "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
    doctorAddress: "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
    cid: "QmR2EViJjaNJtzEkDMddVhreWVA3cFk58JkFBCwVHq41oM",
    info: "Male - 28 Years 03 Months",
    uniqueKey: "yshsyhsy1",
    requestStatus: 0,
    medicalRecordShared: false,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis iure unde voluptatem autem explicabo! Hic voluptatum explicabo tenetur facilis distinctio eaque, modi minima dicta fuga libero veritatis nostrum eum?",
  },
  {
    name: "Sophia Moore",
    appointmentType: "medical checkup",
    time: "10.00am",
    symptoms: ["cough", "catarrh", "cold"],
    image: patient2,
    hospital: "Saint Patricks",
    specialization: "Radiologist",
    appointmentStatus: 1,
    appointmentId: "10",
    patientAddress: "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
    doctorAddress: "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
    cid: "QmR2EViJjaNJtzEkDMddVhreWVA3cFk58JkFBCwVHq41oM",
    info: "Male - 28 Years 03 Months",
    uniqueKey: "yshsyhsy2",
    requestStatus: 1,
    medicalRecordShared: false,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis iure unde voluptatem autem explicabo! Hic voluptatum explicabo tenetur facilis distinctio eaque, modi minima dicta fuga libero veritatis nostrum eum?",
  },
];

export const patientsAccepted = [
  {
    name: "Dell Jackson",
    appointmentType: "report",
    time: "9.00am",
    symptoms: ["fever", "chest pain", "infection", "dizziness"],
    image: patient1,
    appointmentStatus: 2,
    appointmentId: "10",
    patientAddress: "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
    doctorAddress: "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
    cid: "QmR2EViJjaNJtzEkDMddVhreWVA3cFk58JkFBCwVHq41oM",
    info: "Male - 28 Years 03 Months",
    uniqueKey: "yshsyhsy1",
    requestStatus: 1,
    medicalRecordShared: false,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis iure unde voluptatem autem explicabo! Hic voluptatum explicabo tenetur facilis distinctio eaque, modi minima dicta fuga libero veritatis nostrum eum?",
    doctorMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis iure unde voluptatem autem explicabo! Hic voluptatum explicabo tenetur facilis distinctio eaque, modi minima dicta fuga libero veritatis nostrum eum?",
  },
  {
    name: "Sophia Moore",
    appointmentType: "medical checkup",
    time: "10.00am",
    symptoms: ["cough", "catarrh", "cold"],
    image: patient2,
    appointmentStatus: 2,
    appointmentId: "10",
    patientAddress: "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
    doctorAddress: "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
    cid: "QmR2EViJjaNJtzEkDMddVhreWVA3cFk58JkFBCwVHq41oM",
    info: "Male - 28 Years 03 Months",
    uniqueKey: "yshsyhsy2",
    requestStatus: 1,
    medicalRecordShared: false,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis iure unde voluptatem autem explicabo! Hic voluptatum explicabo tenetur facilis distinctio eaque, modi minima dicta fuga libero veritatis nostrum eum?",
    doctorMessage:
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
    requestStatus: 2,
    medicalRecordShared: true,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis iure unde voluptatem autem explicabo! Hic voluptatum explicabo tenetur facilis distinctio eaque, modi minima dicta fuga libero veritatis nostrum eum?",
    doctorMessage:
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
    requestStatus: 2,
    medicalRecordShared: true,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis iure unde voluptatem autem explicabo! Hic voluptatum explicabo tenetur facilis distinctio eaque, modi minima dicta fuga libero veritatis nostrum eum?",
    doctorMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis iure unde voluptatem autem explicabo! Hic voluptatum explicabo tenetur facilis distinctio eaque, modi minima dicta fuga libero veritatis nostrum eum?",
  },
];

export const patientsPending = [
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
    requestStatus: 0,
    medicalRecordShared: false,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis iure unde voluptatem autem explicabo! Hic voluptatum explicabo tenetur facilis distinctio eaque, modi minima dicta fuga libero veritatis nostrum eum?",
    doctorMessage:
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
    requestStatus: 0,
    medicalRecordShared: false,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis iure unde voluptatem autem explicabo! Hic voluptatum explicabo tenetur facilis distinctio eaque, modi minima dicta fuga libero veritatis nostrum eum?",
    doctorMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis iure unde voluptatem autem explicabo! Hic voluptatum explicabo tenetur facilis distinctio eaque, modi minima dicta fuga libero veritatis nostrum eum?",
  },
  {
    name: "Campbell Deschamp",
    appointmentType: "weekly visit",
    time: "2.00pm",
    symptoms: ["fever", "chest pain", "infection", "dizziness"],
    image: patient3,
    appointmentStatus: 1,
    appointmentId: "10",
    patientAddress: "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
    doctorAddress: "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
    cid: "QmR2EViJjaNJtzEkDMddVhreWVA3cFk58JkFBCwVHq41oM",
    info: "Male - 28 Years 03 Months",
    uniqueKey: "yshsyhsy3",
    requestStatus: 0,
    medicalRecordShared: false,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis iure unde voluptatem autem explicabo! Hic voluptatum explicabo tenetur facilis distinctio eaque, modi minima dicta fuga libero veritatis nostrum eum?",
    doctorMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis iure unde voluptatem autem explicabo! Hic voluptatum explicabo tenetur facilis distinctio eaque, modi minima dicta fuga libero veritatis nostrum eum?",
  },
];

export const doctors = [];

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
];

export const testPatientData = {
  allergies:
    "Tree and grass pollen (hay fever), house dust mites, foods, such as peanuts, milk and eggs (food allergy), animal fur, particularly from pets like cats and dogs, insect stings, such as bee and wasp stings.",
  biodata: {
    dob: 884214000000,

    imageCid: "QmU5QpWL3NAxax7NiQtQnFFeav76T2D78a2am3MNbY7dV2",

    name: "Test Patient",

    nationality: "Jamaican",

    pronouns: "He/Him",

    specialization: "Engineer",
  },
  medData: {
    bGroup: "O-",

    genotype: "AS",

    height: "180",

    weight: "67",
  },
  medHistory: "Ulcer, Purging, Asthma, Hepatitis.",
  surgHistory: "Breast Surgery, Hernia repair",
};
