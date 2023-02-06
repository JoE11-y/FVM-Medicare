import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount, useProvider } from "wagmi";
import { useDoctorNFTContract, usePatientNFTContract } from "../hooks";
import "../css/landingPage.css";
import image from "../images/landing2.jpg";
import fvm from "../images/fvm.jpg";
import { motion } from "framer-motion";
import { ConnectWallet } from "../components/ConnectWallet";
import { NavBarIcon } from "../components/NavBarIcon";
import { Logo } from "../components/Logo";
import { DesktopNav } from "../components/DesktopNav";
import LoadingButton from "@mui/lab/LoadingButton";

const container = {
  hidden: { opacity: 1, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const LandingPage = () => {
  const navigate = useNavigate();
  const provider = useProvider();

  const [loading, setLoading] = useState(false);

  const { isConnected, address } = useAccount();

  const doctorNFTContract = useDoctorNFTContract(provider);
  const patientNFTContract = usePatientNFTContract(provider);

  const checkUser = useCallback(async () => {
    setLoading(true);
    try {
      const isDoctor = await doctorNFTContract.isTokenHolder(address);

      const isPatient = await patientNFTContract.isTokenHolder(address);

      if (isDoctor) {
        navigate("/doctor-dashboard");
      } else if (isPatient) {
        navigate("/patient-dashboard");
      } else {
        navigate("/choose-user");
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  }, [address, navigate, doctorNFTContract, patientNFTContract]);

  return (
    <motion.div className="landingPage">
      <motion.div
        className="landingPage-content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.header className="landingHeader" variants={item}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Logo />
            <DesktopNav />
          </div>
          <ConnectWallet />
          <NavBarIcon />
        </motion.header>

        <motion.div className="landingBody" variants={item}>
          <motion.div className="landingBody__left" variants={item}>
            <h2>Maximize your life expectancy</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              rerum quaerat facilis in nemo neque minus sint! Sed minus maxime
              atque exercitationem, nesciunt iste asperiores aliquam quis. Sunt,
              vel excepturi.
            </p>
            {isConnected ? (
              <LoadingButton
                variant="contained"
                sx={{ marginTop: "1rem" }}
                onClick={() => checkUser()}
                loading={loading}
              >
                Get Started
              </LoadingButton>
            ) : (
              <></>
            )}
          </motion.div>
          <motion.div className="landingBody__right" variants={container}>
            <img src={image} alt="" />
            <div className="shape-1"></div>
            <div className="shape-2"></div>
            <div className="bg"></div>
          </motion.div>
        </motion.div>
        <motion.div className="fvm" variants={item}>
          <img src={fvm} alt="FVM Space Warp Banner" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
