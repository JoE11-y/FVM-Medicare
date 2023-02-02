import React from "react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { filecoinHyperspace } from "wagmi/chains";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";

const projectId = process.env.REACT_APP_WC_PROJECT_ID;

// const hyperspace = {
//   id: 3141,
//   name: "Filecoin Hyperspace",
//   network: "filecoin-hyperspace",
//   nativeCurrency: {
//     decimals: 18,
//     name: "testnet filecoin",
//     symbol: "tFIL",
//   },
//   rpcUrls: {
//     default: {
//       http: ["https://filecoin-hyperspace.chainstacklabs.com/rpc/v1"],
//     },
//     public: {
//       http: ["https://filecoin-hyperspace.chainstacklabs.com/rpc/v1"],
//     },
//   },
//   blockExplorers: {
//     default: {
//       name: "Filfox",
//       url: "https://hyperspace.filfox.info/en",
//     },
//     gilf: {
//       name: "Glif",
//       url: "https://explorer.glif.io/?network=hyperspace",
//     },
//   },
// };

const { chains, provider } = configureChains(
  [filecoinHyperspace],
  [walletConnectProvider({ projectId: projectId })]
);

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "FVM Medicare", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(client, chains);

export const WalletProvider = ({ children }) => {
  return (
    <>
      <WagmiConfig client={client}>{children}</WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};
