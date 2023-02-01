import React from "react"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import { Icon } from "@mui/material"

export const AcceptAppointment = () => {
  return (
    <Icon
      component={CheckCircleOutlineIcon}
      color="success"
      fontSize="small"
      cursor={"pointer"}
    />
  )
}
