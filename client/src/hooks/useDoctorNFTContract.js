import react from "react";
import { useContract } from "./useContract";
import * as FVMMedicareNFTContract from "../contracts/FVMMedicareNFT.json";
import * as FVMMedicareAddresses from "../contracts/FVMMedicareAddressses.json";

export const useDoctorNFTContract = (signerOrProvider) => {
  return useContract(
    FVMMedicareNFTContract.abi,
    FVMMedicareAddresses.DoctorNFT,
    signerOrProvider
  );
};
