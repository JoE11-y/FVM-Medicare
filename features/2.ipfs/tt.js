require("dotenv").config({ path: "../.env" });

var js_base64 = require("js-base64");

const lighthouse = require("@lighthouse-web3/sdk");

var obj = {
  employees: [
    {
      name: "Dell Jackson",
      appointmentType: "report",
      time: "9.00am",
      symptoms: ["fever", "chest pain", "infection", "dizziness"],
      image: "patient1",
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
      image: "patient2",
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
      image: "patient3",
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
      image: "patient4",
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
  ],
};

var buf = Buffer.from(JSON.stringify(obj));

var arr = new Uint8Array(buf);

var b64 = js_base64.Base64.fromUint8Array(arr);

// console.log(b64);

const deploy = async () => {
  const key = process.env.LIGHTHOUSE_KEY;
  // console.log(key);
  const response = await lighthouse.uploadText(b64, process.env.LIGHTHOUSE_KEY);

  console.log(response);
};

deploy();
