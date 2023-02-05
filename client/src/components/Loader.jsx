import React from "react";

export const Loader = () => {
  return (
    <div className="loader-body">
      <div
        className="doctor-appointment"
        style={{
          backgroundColor: "#fff",
          margin: "1rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        Please Sign transaction to get access to data
      </div>
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
