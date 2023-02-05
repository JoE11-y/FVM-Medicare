import lighthouse from "@lighthouse-web3/sdk";
import { Base64 } from "js-base64";

const API_KEY = process.env.REACT_APP_LIGHTHOUSE_KEY;

console.log(API_KEY);

const progressCallback = (progressData) => {
  let percentageDone =
    100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
  console.log(percentageDone);
};

const encryptionSignature = async (signer) => {
  const address = await signer.getAddress();
  const messageRequested = (await lighthouse.getAuthMessage(address)).data
    .message;
  const signedMessage = await signer.signMessage(messageRequested);
  return {
    signedMessage: signedMessage,
    publicKey: address,
  };
};

export const uploadFile = async (e) => {
  const output = await lighthouse.upload(e, API_KEY, progressCallback);
  return output;
};

export const uploadEncryptedData = async (signer, jsonData) => {
  const sig = await encryptionSignature(signer);
  const jsonFileEvent = jsonToFile(jsonData);
  const response = await lighthouse.uploadEncrypted(
    jsonFileEvent,
    sig.publicKey,
    API_KEY,
    sig.signedMessage,
    progressCallback
  );
  return response;
};

const jsonToFile = (jsonData) => {
  const jsonString = JSON.stringify(jsonData);
  const jsonFile = [new Blob([jsonString], { type: "text/plain" })];
  const filedata = new File(jsonFile, "record.txt", {
    lastModified: Date.now(),
    type: "text/plain",
  });
  const event = { persist: () => {}, target: { files: [filedata] } };
  return event;
};

export const downloadNDecryptData = async (cid, signer) => {
  const sig = await encryptionSignature(signer);
  const fileEncryptionKey = await lighthouse.fetchEncryptionKey(
    cid,
    sig.publicKey,
    sig.signedMessage
  );

  const fileType = "text/plain";

  const decrypted = await lighthouse.decryptFile(
    cid,
    fileEncryptionKey.data.key
  );
};

export const shareAccess = async (cid, signer, addressTo) => {
  const sig = await encryptionSignature(signer);

  const shareResponse = await lighthouse.shareFile(
    sig.publicKey,
    addressTo,
    cid,
    sig.signedMessage
  );

  return shareResponse;
};

export const revokeAccess = async (cid, signer, addressFrom) => {
  const sig = await encryptionSignature(signer);

  const revokeResponse = await lighthouse.revokeFileAccess(
    sig.publicKey,
    addressFrom,
    cid,
    sig.signedMessage
  );

  return revokeResponse;
};
