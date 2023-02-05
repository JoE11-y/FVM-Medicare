import React from "react"

export const Loader = () => {
  return (
    <div className="loader-body">
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className="doctor-appointment"
        style={{
          margin: "1rem",
          padding: "1rem",
        }}
      >
        Please Sign transaction to get access to data
      </div>
    </div>
  )
}
