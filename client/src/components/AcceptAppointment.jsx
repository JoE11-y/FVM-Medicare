import React from "react"
import { Icon } from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"

export const AcceptAppointment = () => {
  return (
    <Icon
      component={CheckIcon}
      color="success"
      fontSize="small"
      cursor={"pointer"}
    />
  )
}
