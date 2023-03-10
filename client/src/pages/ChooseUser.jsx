import React from "react";
import { DesktopNav } from "../components/DesktopNav";
import { Logo } from "../components/Logo";
import { Icon } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MedicationIcon from "@mui/icons-material/Medication";
import { Link } from "react-router-dom";
import { UserIcon } from "../components/UserIcon";

export const ChooseUser = () => {
  return (
    <div style={{ backgroundColor: "#e0e0e0", minHeight: "100vh" }}>
      <header className="landingHeader">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo colorTop={"#272F3F"} colorBottom={"var(--blue)"} />
          <DesktopNav style={{ borderColor: "#272F3F", color: "#272F3F" }} />
        </div>
        <UserIcon />
      </header>

      <p style={{ textAlign: "center", marginTop: "3rem" }}>
        Register as a Patient or a Doctor.
      </p>
      <section className="choose-user">
        <Link
          to={"/patient-form"}
          className="doctor-patient"
          style={{ color: "var(--gunmetal)" }}
        >
          <Icon
            component={AccountCircleIcon}
            fontSize="large"
            color="primary"
          />
          <p>As Patient</p>
        </Link>
        <Link to={"/doctor-form"} className="doctor-patient">
          <Icon component={MedicationIcon} fontSize="large" color="error" />
          <p>As Doctor</p>
        </Link>
      </section>
    </div>
  );
};
