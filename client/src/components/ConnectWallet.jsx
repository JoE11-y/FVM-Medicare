import React, { useState } from "react"
import { Button } from "@mui/material"

export const ConnectWallet = () => {
  return (
    <div className={`connect-wallet`}>
      <Button
        variant="outlined"
        size="medium"
        sx={{
          textTransform: "capitalize",
          color: "#fff",
          borderColor: "#fff",
        }}
        className="nav-btn"
      >
        Connect Wallet
      </Button>
    </div>
  )
}
