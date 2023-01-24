import React from "react"
import { Link } from "react-router-dom"

export const Logo = ({ colorTop, colorBottom }) => {
  return (
    <Link to={"/"}>
      <h1 className="logo">
        <span style={{ color: colorTop }}>FVM</span>
        <span style={{ color: colorBottom }}>MediCare</span>
      </h1>
    </Link>
  )
}
