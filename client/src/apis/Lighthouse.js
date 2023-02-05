import lighthouse from "@lighthouse-web3/sdk";
import { Base64 } from "js-base64";

const API_KEY = process.env.REACT_LIGHTHOUSE_KEY;

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

export const uploadDoctorCertificate = async (e, signer) => {
  const sig = await encryptionSignature(signer);
  const output = await lighthouse.uploadEncrypted(
    e,
    API_KEY,
    sig.publicKey,
    sig.signedMessage,
    progressCallback
  );
  return output;
};

const formatJSON = (jsonObj) => {
  const buf = Buffer.from(JSON.stringify(jsonObj));
  const arr = new Uint8Array(buf);
  const b64 = Base64.fromUint8Array(arr);
  return b64;
};

export const uploadEncryptedData = async (signer, jsonData) => {
  const sig = await encryptionSignature(signer);
  const b64Text = formatJSON(jsonData);
  const response = await lighthouse.textUploadEncrypted(
    b64Text,
    API_KEY,
    sig.publicKey,
    sig.signedMessage
  );
  return response;
};

const formatB64 = (b64TextBuffer) => {
  const b64 = Buffer.from(b64TextBuffer);
  const u8arr = Base64.toUint8Array(b64);
  const jsonBuf = Buffer.from(u8arr);
  const jsonData = JSON.parse(jsonBuf.toString());
  return jsonData;
};

export const downloadNDecryptData = async (cid, signer) => {
  const sig = await encryptionSignature(signer);
  const fileEncryptionKey = await lighthouse.fetchEncryptionKey(
    cid,
    sig.publicKey,
    sig.signedMessage
  );
  const decrypted = await lighthouse.decryptFile(
    cid,
    fileEncryptionKey.data.key
  );
  const jsonData = formatB64(decrypted);
  return jsonData;
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
