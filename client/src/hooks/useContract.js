import react from "react";
import { Contract } from "ethers";

export const useContract = (abi, contractAddress, signerOrProvider) => {
  return new Contract(contractAddress, abi, signerOrProvider);
};
