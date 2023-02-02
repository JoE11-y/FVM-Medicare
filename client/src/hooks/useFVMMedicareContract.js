import react from "react";
import { useContract } from "./useContract";
import FVMMedicareContract from "../contracts/FVMMedicare.json";
import FVMMedicareAddresses from "../contracts/FVMMedicareAddressses.json";

export const useFVMMedicareContract = (signerOrProvider) =>
  useContract(
    FVMMedicareContract.abi,
    FVMMedicareAddresses.FVMMedicare,
    signerOrProvider
  );
