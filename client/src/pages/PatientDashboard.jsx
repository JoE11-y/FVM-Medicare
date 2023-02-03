import React from "react";
import "../css/dashboard.css";
import { Logo } from "../components/Logo";
import { DesktopNav } from "../components/DesktopNav";
import { UserIcon } from "../components/UserIcon";
import { LeftSide } from "../components/PatientDashBoard/LeftSide";
import { RightSide } from "../components/PatientDashBoard/RightSide";
import { getRequest } from "../apis/FVMMedicare";

export const PatientDashboard = () => {
  return (
    <div className="dashboard">
      <header className="landingHeader">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo colorTop={"#272F3F"} colorBottom={"#272F3F"} />
          <DesktopNav style={{ borderColor: "#272F3F", color: "#272F3F" }} />
        </div>
        <UserIcon />
      </header>

      <div className="dashboard_body">
        <LeftSide />
        <RightSide />
      </div>
      <div className="dashboard-content"></div>
    </div>
  );
};
