require("dotenv").config({ path: "../.env" });
const { ethers } = require("ethers");
const lighthouse = require("@lighthouse-web3/sdk");
const js_base64 = require("js-base64");

var obj = {
  employees: [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Peter", lastName: "Jones" },
  ],
};

const get_b64 = (jsonObj) => {
  var buf = Buffer.from(JSON.stringify(jsonObj));

  var arr = new Uint8Array(buf);

  var b64 = js_base64.Base64.fromUint8Array(arr);

  return b64;
};

const sign_auth_message = async (publicKey, privateKey) => {
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = new ethers.Wallet(privateKey, provider);
  const messageRequested = (await lighthouse.getAuthMessage(publicKey)).data
    .message;
  const signedMessage = await signer.signMessage(messageRequested);
  return signedMessage;
};

const deployEncrypted = async () => {
  const b64Text = get_b64(obj);
  const apiKey = process.env.LIGHTHOUSE_KEY;
  const publicKey = "0xf3a7050c41c7C8e06Ec82FCAffBE62bfE8D84D96";
  const privateKey = process.env.PRIVATE_KEY;
  const signed_message = await sign_auth_message(publicKey, privateKey);

  const response = await lighthouse.textUploadEncrypted(
    b64Text,
    apiKey,
    publicKey,
    signed_message
  );

  // Display response
  console.log(response);
};

deployEncrypted();
