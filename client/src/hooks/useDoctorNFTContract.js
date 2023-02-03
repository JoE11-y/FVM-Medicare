import { useContract } from "./useContract";
import FVMMedicareNFTContract from "../contracts/FVMMedicareNFT.json";
import FVMMedicareAddresses from "../contracts/FVMMedicareAddressses.json";

export const useDoctorNFTContract = (signerOrProvider) =>
  useContract(
    FVMMedicareNFTContract.abi,
    FVMMedicareAddresses.DoctorNFT,
    signerOrProvider
  );
