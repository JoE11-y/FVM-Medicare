import React from "react"
import { Icon } from "@mui/material"
import NotInterestedIcon from "@mui/icons-material/NotInterested"

export const DeclineAppointment = () => {
  return (
    <Icon
      component={NotInterestedIcon}
      color="action"
      cursor={"pointer"}
      fontSize="small"
      sx={{ marginLeft: "0.5rem" }}
    />
  )
}
