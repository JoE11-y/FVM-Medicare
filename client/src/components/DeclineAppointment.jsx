import React from "react"
import { Icon } from "@mui/material"
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault"

export const DeclineAppointment = () => {
  return (
    <Icon
      component={DisabledByDefaultIcon}
      color="error"
      cursor={"pointer"}
      fontSize="small"
      sx={{ marginLeft: "0.5rem" }}
    />
  )
}
