const PushAPI = require("@pushprotocol/restapi");
const ethers = require("ethers");

const PK = "399dd247ca1cd2cb6433ffa62d07d336a939b3afdb158575076ad0d86146d5ec"; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async () => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `[SDK-TEST] notification TITLE:`,
        body: `[sdk-test] notification BODY`,
      },
      payload: {
        title: `[sdk-test] payload title`,
        body: `sample msg body`,
        cta: "",
        img: "",
      },
      recipients: "eip155:5:0xc9aA0cF0d639b8DA98B3B78a7095544BE5781Ed0", // recipient address
      channel: "eip155:5:0xf3a7050c41c7C8e06Ec82FCAffBE62bfE8D84D96", // your channel address
      env: "staging",
    });

    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", apiResponse);
  } catch (err) {
    console.error("Error: ", err);
  }
};

sendNotification();
