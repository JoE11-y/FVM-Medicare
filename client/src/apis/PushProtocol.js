import * as PushAPI from "@pushprotocol/restapi";
import { Wallet } from "ethers";
import { v4 } from "uuid";

const channelAddress = process.env.REACT_APP_CHANNEL_ADDR;
const PK = `0x${process.env.REACT_APP_CHANNEL_PKEY}`;
const channelSigner = new Wallet(PK);

export const optUserIn = async (userAddress) => {
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

export const sendMessage = async (
  senderAddress,
  message,
  receiverAddress,
  uniquekey
) => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer: channelSigner,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `New Message from FVM Medicare`,
        body: `From ${senderAddress}`,
      },
      payload: {
        title: `Message ${uniquekey}`,
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

const getNotifications = async (userAddress) => {
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

export const getUserMessage = async (
  userAddress,
  addressFrom,
  msgUniqueKey
) => {
  const notifications = await getNotifications(userAddress);
  let message = "";
  for (let i = 0; i < notifications.length; i++) {
    const currNotification = notifications[i];
    if (currNotification.app != "FVM Medicare") continue;
    const notificationTitle = currNotification.notification["body"];
    const uniquekey = currNotification.title.slice(8);
    const address = notificationTitle.slice(5);
    if (
      address.toLowerCase() != addressFrom.toLowerCase() ||
      uniquekey.toLowerCase() != msgUniqueKey.toLowerCase()
    )
      continue;
    message = currNotification.message;
    break;
  }
  console.log(message);
  return message;
};
