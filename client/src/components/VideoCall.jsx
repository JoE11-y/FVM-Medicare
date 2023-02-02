import React, { useState } from "react";
import { Button, Icon } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { HuddleCall } from "./HuddleCall";

export const VideoCall = ({ isTime }) => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <>
      <Button
        disabled={!isTime}
        style={{
          width: "100%",
          marginTop: "0.5rem",
        }}
        size="small"
        onClick={() => setShow(!show)}
      >
        {isTime ? (
          <>
            {!show ? (
              <>
                {" "}
                <Icon component={VideoCallIcon} color="info" fontSize="large" />
                <small>Start Call</small>{" "}
              </>
            ) : (
              <>
                <Icon
                  component={CancelPresentationIcon}
                  color="danger"
                  fontSize="large"
                />
                <small>End Call</small>{" "}
              </>
            )}
          </>
        ) : (
          <>Not Yet Time</>
        )}
      </Button>

      {show ? <HuddleCall meetId={"tyre"} /> : <></>}
    </>
  );
};
