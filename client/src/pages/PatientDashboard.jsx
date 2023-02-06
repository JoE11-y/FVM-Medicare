import React, { useEffect, useCallback, useState } from "react";
import "../css/dashboard.css";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { data: signer, isFetched } = useSigner();
  const provider = useProvider();
  const [patientData, setPatientData] = useState(null);
  const nftContract = usePatientNFTContract(provider);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      if (isFetched) {
        const address = await signer.getAddress();
        const nftContractLinked = nftContract.connect(signer);
        const tokenId = await nftContractLinked.getTokenId(address);
        const cid = await nftContractLinked.tokenURI(tokenId);
        const data = await downloadNDecryptData(cid, signer);
        setPatientData(data);
        console.log(data);
      }
    } catch (e) {
      console.log(e.message);
      navigate("/");
    } finally {
      setLoading(false);
    }
  }, [isFetched, signer, navigate, nftContract]);

  // useEffect(() => {
  //   let run = true;
  //   if (!patientData && run) {
  //     if (loading) return;
  //     getData();
  //   }
  //   return () => {
  //     run = false;
  //   };
  // }, [getData, patientData, loading]);

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
          <LeftSide
            name={patientData ? patientData.biodata["name"] : "John Doe"}
          />
          <RightSide patientData={patientData ? patientData : {}} />
        </div>
      )}
    </div>
  );
};
