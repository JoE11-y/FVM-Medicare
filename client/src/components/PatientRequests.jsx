import React, { useState } from "react"
import { PatientRequestsModal } from "./PatientRequestsModal"

export const PatientRequests = ({ title, index, count, type, onClick }) => {
  const [active, setActive] = useState(false)

  return (
    <>
      <div className="status-box" onClick={() => setActive(true)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <h3>0{index}</h3>
          <span style={{ textTransform: "capitalize" }}>{title}</span>
        </div>
        <div className="count">+{count}</div>
      </div>
      <PatientRequestsModal
        handleClose={() => setActive(!active)}
        open={active}
        type={type}
      />
    </>
  )
}
