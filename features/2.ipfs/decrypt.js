require("dotenv").config({ path: "../.env" });
// Decrypt file nodejs
const { ethers } = require("ethers");
const fs = require("fs");
const lighthouse = require("@lighthouse-web3/sdk");
const js_base64 = require("js-base64");

const b64_to_json = (b64) => {
  var u8arr = js_base64.Base64.toUint8Array(b64);

  var jsonBuf = Buffer.from(u8arr);

  var jsonFile = JSON.parse(jsonBuf.toString());

  return jsonFile;
};

const sign_auth_message = async (publicKey, privateKey) => {
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = new ethers.Wallet(privateKey, provider);
  const messageRequested = (await lighthouse.getAuthMessage(publicKey)).data
    .message;
  const signedMessage = await signer.signMessage(messageRequested);
  return signedMessage;
};

const decrypt = async () => {
  try {
    const cid = "QmR2EViJjaNJtzEkDMddVhreWVA3cFk58JkFBCwVHq41oM";
    const publicKey = "0xc9aA0cF0d639b8DA98B3B78a7095544BE5781Ed0";
    const privateKey = process.env.PRIVATE_KEY_2;

    // Get file encryption key
    const signed_message = await sign_auth_message(publicKey, privateKey);
    const fileEncryptionKey = await lighthouse.fetchEncryptionKey(
      cid,
      publicKey,
      signed_message
    );

    // Decrypt File
    const decrypted = await lighthouse.decryptFile(
      cid,
      fileEncryptionKey.data.key
    );

    // Save File
    var b64 = Buffer.from(decrypted);

    const jsonFile = b64_to_json(b64.toString());

    console.log(jsonFile);
  } catch (e) {
    console.log(e.message);
  }
};

decrypt();
