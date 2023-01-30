require("dotenv").config({ path: "../.env" });

var js_base64 = require("js-base64");

const lighthouse = require("@lighthouse-web3/sdk");

var obj = {
  employees: [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Peter", lastName: "Jones" },
  ],
};

var buf = Buffer.from(JSON.stringify(obj));

var arr = new Uint8Array(buf);

var b64 = js_base64.Base64.fromUint8Array(arr);

console.log(b64);

const deploy = async () => {
  const key = process.env.LIGHTHOUSE_KEY;
  const response = await lighthouse.uploadText(b64, process.env.LIGHTHOUSE_KEY);

  console.log(response);
};

deploy();
