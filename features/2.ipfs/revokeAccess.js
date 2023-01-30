require("dotenv").config({ path: "../.env" });
const { ethers } = require("ethers");
const lighthouse = require("@lighthouse-web3/sdk");

const signAuthMessage = async (publicKey, privateKey) => {
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = new ethers.Wallet(privateKey, provider);
  const messageRequested = (await lighthouse.getAuthMessage(publicKey)).data
    .message;
  const signedMessage = await signer.signMessage(messageRequested);
  return signedMessage;
};

const revokeAccess = async () => {
  try {
    const cid = "QmR2EViJjaNJtzEkDMddVhreWVA3cFk58JkFBCwVHq41oM";
    const publicKey = "0xf3a7050c41c7C8e06Ec82FCAffBE62bfE8D84D96";
    const privateKey = process.env.PRIVATE_KEY;

    const signedMessage = await signAuthMessage(publicKey, privateKey);
    const publicKeyUserB = "0xc9aA0cF0d639b8DA98B3B78a7095544BE5781Ed0";

    const revokeResponse = await lighthouse.revokeFileAccess(
      publicKey,
      publicKeyUserB,
      cid,
      signedMessage
    );

    console.log(revokeResponse);
  } catch (error) {
    console.log(error.message);
  }
};

revokeAccess();
