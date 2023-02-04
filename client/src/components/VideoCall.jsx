import React, { useState } from "react";
import { Button, Icon } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { HuddleCall } from "./HuddleCall";

export const VideoCall = ({ key }) => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <>
      <Button
        style={{
          width: "100%",
          marginTop: "0.5rem",
        }}
        size="small"
        onClick={() => setShow(!show)}
      >
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
      </Button>

      {show ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            zIndex: 5,
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "1rem",
          }}
        >
          <HuddleCall meetId={key} />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              startIcon={<CancelPresentationIcon />}
              color="error"
              onClick={() => setShow(!show)}
            >
              End Call
            </Button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
