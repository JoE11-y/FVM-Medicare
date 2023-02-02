import react from "react";
import { useContract } from "./useContract";
import * as FVMMedicareContract from "../contracts/FVMMedicare.json";
import * as FVMMedicareAddresses from "../contracts/FVMMedicareAddressses.json";

export const useFVMMedicareContract = (signerOrProvider) => {
  return useContract(
    FVMMedicareContract.abi,
    FVMMedicareAddresses.FVMMedicare,
    signerOrProvider
  );
};
