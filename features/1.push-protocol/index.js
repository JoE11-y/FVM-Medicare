const PushAPI = require("@pushprotocol/restapi");
const ethers = require("ethers");
const uuid = require("uuid");
require("dotenv").config({ path: "../.env" });

const PK = process.env.PRIVATE_KEY; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async () => {
  const uniquekey = uuid.v4();
  console.log(uniquekey);
  // try {
  //   const apiResponse = await PushAPI.payloads.sendNotification({
  //     signer,
  //     type: 3, // target
  //     identityType: 2, // direct payload
  //     notification: {
  //       title: `New Data Request`,
  //       body: `From 0x7e75f43853FA26f590D2f351C3C2B100E4FC329f`,
  //     },
  //     payload: {
  //       title: `Message ${uniquekey}`,
  //       body: `I love you so much`,
  //       cta: "",
  //       img: "",
  //     },
  //     recipients: "eip155:5:0xc9aA0cF0d639b8DA98B3B78a7095544BE5781Ed0", // recipient address
  //     channel: "eip155:5:0xf3a7050c41c7C8e06Ec82FCAffBE62bfE8D84D96", // your channel address
  //     env: "staging",
  //   });

  //   // apiResponse?.status === 204, if sent successfully!
  //   console.log("API repsonse: ", apiResponse.status);
  // } catch (err) {
  //   console.error("Error: ", err.message);
  // }
};

sendNotification();
