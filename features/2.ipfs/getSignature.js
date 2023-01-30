import { VoidSigner } from "ethers";
import { record } from "./types";

const domain = {
  name: "FVM Medicare",
  version: "1",
  chainId: "3141",
};

const encryptionTypes = {
  Record: [
    { name: "Owner Address", type: "address" },
    { name: "Identifier", type: "string" },
    { name: "CID", type: "string" },
  ],
};

export const getRecordEncryptionMessage = async (signer, record) => {
  const msg = await signer._signTypedData(domain, encryptionTypes, {
    "Owner Address": record.owner,
    "Agreement Identifier": record.identifier,
    CID: record.cid,
  });

  return Buffer.from(msg);
};
