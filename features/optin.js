// import * as PushAPI from "@pushprotocol/restapi";

const PushAPI = require("@pushprotocol/restapi");
const ethers = require("ethers");

const PK = "9502ff8314a90e0880db44efa514f57e333aef6a24560bc2a9d89bcd0878d74f"; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async () => {
  try {
    const apiResponse = await PushAPI.channels.subscribe({
      signer: signer,
      channelAddress: "eip155:5:0xf3a7050c41c7C8e06Ec82FCAffBE62bfE8D84D96", // channel address in CAIP
      userAddress: "eip155:5:0xc9aA0cF0d639b8DA98B3B78a7095544BE5781Ed0", // user address in CAIP
      onSuccess: () => {
        console.log("opt in success");
      },
      onError: () => {
        console.error("opt in error");
      },
      env: "staging",
    });
  } catch (err) {
    console.error("Error: ", err);
  }
};

sendNotification();
