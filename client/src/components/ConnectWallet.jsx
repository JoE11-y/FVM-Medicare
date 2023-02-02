import React from "react";
import { Web3Button } from "@web3modal/react";
import { Button } from "@mui/material";

export const ConnectWallet = () => {
  return (
    <div className={`connect-wallet`}>
      <Web3Button>
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
          "CONNECT WALLET"
        </Button>
      </Web3Button>
    </div>
  );
};
