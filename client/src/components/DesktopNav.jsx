import React from "react"
import { Link } from "react-router-dom"

export const DesktopNav = ({ style }) => {
  return (
    <ul className="desktop-nav">
      <li>
        <Link to={"/"} style={style}>
          FVM Hackathon
        </Link>
      </li>
      <li>
        <Link to={"/patient-dashboard"} style={style}>
          Documentation
        </Link>
      </li>
      <li>
        <Link to={"/patient-dashboard"} style={style}>
          about
        </Link>
      </li>
    </ul>
  )
}
