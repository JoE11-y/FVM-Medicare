import react from "react";
import { useContract } from "./useContract";
import FVMMedicareNFTContract from "../contracts/FVMMedicareNFT.json";
import FVMMedicareAddresses from "../contracts/FVMMedicareAddressses.json";

export const usePatientNFTContract = (signerOrProvider) =>
  useContract(
    FVMMedicareNFTContract.abi,
    FVMMedicareAddresses.PatientNFT,
    signerOrProvider
  );
