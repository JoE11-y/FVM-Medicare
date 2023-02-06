import React, { useState } from "react"
import "../css/nav.css"
import { ConnectWallet } from "./ConnectWallet"

export const NavBarIcon = () => {
  const [active, setActive] = useState("")
  return (
    <div
      className={`navBarIcon ${active}`}
      onClick={() => (active === "" ? setActive("active") : setActive(""))}
    >
      {/* <div className="navBarIcon_top"></div>
      <div className="navBarIcon_mid"></div>
      <div className="navBarIcon_bottom"></div> */}
      {/* <ConnectWallet /> */}
    </div>
  )
}
