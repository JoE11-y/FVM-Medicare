import * as PushAPI from "@pushprotocol/restapi";
import { Wallet } from "ethers";

const channelAddress = process.env.REACT_APP_CHANNEL_ADDR;
const PK = `0x${process.env.REACT_APP_CHANNEL_PKEY}`;
const channelSigner = new Wallet(PK);

export const optIn = async (userAddress) => {
  try {
    const apiResponse = await PushAPI.channels.subscribe({
      signer: channelSigner,
      channelAddress: `eip155:5:${channelAddress}`, // channel address in CAIP
      userAddress: `eip155:5:${userAddress}`, // user address in CAIP
      onSuccess: () => {
        console.log("opt in success");
      },
      onError: () => {
        console.error("opt in error");
      },
      env: "staging",
    });
    return apiResponse?.status;
  } catch (err) {
    console.error("Error: ", err);
  }
};

export const sendNotification = async (
  message,
  receiverAddress,
  userProfile
) => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer: channelSigner,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `New Message`,
        body: `From FVM Medicare`,
      },
      payload: {
        title: `New message from ${userProfile}`,
        body: message,
        cta: "",
        img: "",
      },
      recipients: `eip155:5:${receiverAddress}`, // recipient address
      channel: `eip155:5:${channelAddress}`, // your channel address
      env: "staging",
    });

    // apiResponse?.status === 204, if sent successfully!
    return apiResponse?.status;
  } catch (err) {
    console.error("Error: ", err);
  }
};

export const getNotifications = async (userAddress) => {
  try {
    const notifications = await PushAPI.user.getFeeds({
      user: `eip155:5:${userAddress}`, // user address in CAIP
      env: "staging",
    });

    return notifications;
  } catch (err) {
    console.error("Error: ", err);
  }
};
