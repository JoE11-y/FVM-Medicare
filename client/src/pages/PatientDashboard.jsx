import React, { useEffect, useCallback, useState } from "react";
import "../css/dashboard.css";
import { useProvider, useSigner } from "wagmi";
import { usePatientNFTContract } from "../hooks";
import { Logo } from "../components/Logo";
import { DesktopNav } from "../components/DesktopNav";
import { UserIcon } from "../components/UserIcon";
import { LeftSide } from "../components/PatientDashBoard/LeftSide";
import { RightSide } from "../components/PatientDashBoard/RightSide";
import { Loader } from "../components/Loader";
import { downloadNDecryptData } from "../apis/Lighthouse";

export const PatientDashboard = () => {
  const [loading, setLoading] = useState(false);
  const { data: signer, isFetched } = useSigner();
  const provider = useProvider();
  const [patientData, setPatientData] = useState({});
  const nftContract = usePatientNFTContract(provider);
  const getPatientData = useCallback(async () => {
    setLoading(true);
    try {
      if (isFetched) {
        const nftContractLinked = nftContract.connect(signer);
        const tokenId = nftContractLinked.getTokenId(signer.getAddress());
        const cid = nftContractLinked.tokenURI(tokenId);

        const data = downloadNDecryptData(cid, signer);
        setPatientData(data);
        console.log(data);
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  }, [isFetched]);

  // useEffect(() => {
  //   getPatientData();
  // }, [getPatientData]);

  return (
    <div className="dashboard">
      <header className="landingHeader">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo colorTop={"#272F3F"} colorBottom={"#272F3F"} />
          <DesktopNav style={{ borderColor: "#272F3F", color: "#272F3F" }} />
        </div>
        <UserIcon />
      </header>
      {loading ? (
        <Loader />
      ) : (
        <div className="dashboard_body">
          <LeftSide />
          <RightSide />
        </div>
      )}
    </div>
  );
};
