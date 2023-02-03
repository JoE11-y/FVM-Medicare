import React from "react"
import doctor from "../images/doctor.jpg"
import "../css/userIcon.css"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { Icon } from "@mui/material"
import { Web3Button } from "@web3modal/react"

export const UserIcon = () => {
  return (
    <Web3Button>
      <div className="user-icon">
        <div style={{ height: "2.5rem", marginRight: "1rem" }}>
          <img src={doctor} alt="" />
        </div>
        <span style={{ display: "inline-block", marginRight: "0.5rem" }}>
          John Doe
        </span>
        <Icon component={KeyboardArrowDownIcon} />
      </div>
    </Web3Button>
  )
}
