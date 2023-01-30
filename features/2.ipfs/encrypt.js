// //Dependencies
// //tweetnacl
// //import nacl from "tweetnacl";
// // import { packToBlob } from "ipfs-car/pack/blob";
// // import { MemoryBlockStore } from "ipfs-car/blockstore/memory";

// //types- record: U8Arr, name: string, encryption: U8Arr
// export const encryptRecordAndPin = async (
//   record,
//   recordIdentifier,
//   signature
// ) => {
//   const encrypted = nacl.secretbox(
//     record,
//     new Uint8Array(24),
//     signature.slice(0, 32)
//   );

//   return pinFile({ file: encrypted, recordIdentifier });
// };

// // returns the cid of the pinned file
// export const pinFile = async (file, name) => {
//   const { root, car } = await packToBlob({
//     input: file,
//     blockstore: new MemoryBlockStore(),
//     wrapWithDirectory: false,
//   });

//   const fd = new FormData();
//   fd.append("file", car, name);

//   const res = await fetch("/api/upload", {
//     method: "POST",
//     body: fd,
//   });

//   if (!res.ok) {
//     throw new Error("Unable to pin file to IPFS");
//   }

//   return root.toV1().toString();
// };

// // returns the user record data
// // params: cid - string, encryptionBytes - U8Arr
// export const downloadAndDecrypt = async (cid, signature) => {
//   const res = await fetch(`https://w3s.link/ipfs/${cid}`);
//   if (!res.ok) {
//     throw new Error("Could not fetch record from IPFS");
//   }

//   const record = nacl.secretbox.open(
//     new Uint8Array(await res.arrayBuffer()),
//     new Uint8Array(24),
//     signature.slice(0, 32)
//   );

//   if (!record) throw new Error("record decryption failed");

//   return record;
// };
