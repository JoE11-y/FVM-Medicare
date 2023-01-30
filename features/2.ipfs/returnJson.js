var axios = require("axios");
var js_base64 = require("js-base64");

var cid = "QmXPqHDE6gjDThQEha97rz7mStfKpSyjU8wSGtKK8XCndY";

const get = async () => {
  try {
    const res = await axios.get(
      `https://gateway.lighthouse.storage/ipfs/${cid}`
    );

    var b64 = res.data;

    var u8arr = js_base64.Base64.toUint8Array(b64);

    var jsonBuf = Buffer.from(u8arr);

    var jsonFile = JSON.parse(jsonBuf.toString());

    console.log(jsonFile);
  } catch (e) {
    console.log(e.message);
  }
};

get();
