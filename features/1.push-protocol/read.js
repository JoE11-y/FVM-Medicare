const PushAPI = require("@pushprotocol/restapi");

const unit = "7374e468-bcc6-44f3-8899-e10484b81939";

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

const getUserMessage = async (userAddress, addressFrom, unique) => {
  const notifications = await getNotifications(userAddress);
  // console.log(notifications[0]);
  let message = "";
  for (let i = 0; i < notifications.length; i++) {
    const currNotification = notifications[i];
    if (currNotification.app != "FVM Medicare") continue;
    const notificationTitle = currNotification.notification["body"];
    const uniquekey = currNotification.title.slice(8);
    const address = notificationTitle.slice(5);
    if (
      address.toLowerCase() != addressFrom.toLowerCase() ||
      uniquekey.toLowerCase() != unique.toLowerCase()
    )
      continue;
    message = currNotification.message;
    break;
  }
  console.log(message);
  return message;
};

getUserMessage(
  "0xc9aA0cF0d639b8DA98B3B78a7095544BE5781Ed0",
  "0x7e75f43853FA26f590D2f351C3C2B100E4FC329f",
  unit
);
