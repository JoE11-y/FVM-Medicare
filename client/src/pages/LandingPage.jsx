import React from "react"
import "../css/landingHeader.css"
import image from "../images/landing2.jpg"
import fvm from "../images/fvm.jpg"
import { motion } from "framer-motion"
import { ConnectWallet } from "../components/ConnectWallet"
import { NavBarIcon } from "../components/NavBarIcon"
import { Link } from "react-router-dom"

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.5,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export const LandingPage = () => {
  return (
    <div className="landingPage">
      <motion.div variants={container} initial="hidden" animate="visible">
        <motion.header className="landingHeader" variants={item}>
          <h1 className="logo">
            <span>FVM</span>
            <span>MediCare</span>
          </h1>

          <ul>
            <li>
              <Link to={"/"}>FVM Hackathon</Link>
            </li>
            <li>
              <Link to={"/patient-dashboard"}>Documentation</Link>
            </li>
            <li>
              <Link to={"/patient-dashboard"}>about</Link>
            </li>
          </ul>
          <ConnectWallet />
          <NavBarIcon />
        </motion.header>

        <motion.div className="landingBody" variants={container}>
          <motion.div className="landingBody__left" variants={item}>
            <h2>Maximize your life expectancy</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              rerum quaerat facilis in nemo neque minus sint! Sed minus maxime
              atque exercitationem, nesciunt iste asperiores aliquam quis. Sunt,
              vel excepturi.
            </p>
          </motion.div>
          <div className="landingBody__right">
            <img src={image} alt="" />
            <div className="shape-1"></div>
            <div className="shape-2"></div>
            <div className="bg"></div>
          </div>
        </motion.div>
        <motion.div className="fvm" variants={item}>
          <img src={fvm} alt="FVM Space Warp Banner" />
        </motion.div>
      </motion.div>
    </div>
  )
}
