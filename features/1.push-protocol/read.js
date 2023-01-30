const PushAPI = require("@pushprotocol/restapi");

const getNotifications = async () => {
  try {
    const notifications = await PushAPI.user.getFeeds({
      user: "eip155:5:0xc9aA0cF0d639b8DA98B3B78a7095544BE5781Ed0", // user address in CAIP
      env: "staging",
    });

    console.log(notifications);
  } catch (err) {
    console.error("Error: ", err);
  }
};

getNotifications();
