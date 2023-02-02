import React from "react";
import ReactDOM from "react-dom/client";
import { WalletProvider } from "./provider/Web3Provider";
import App from "./App";
import "./css/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WalletProvider>
      <App />
    </WalletProvider>
  </React.StrictMode>
);
