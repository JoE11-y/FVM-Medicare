import React from "react"
import { Button, Icon } from "@mui/material"
import VideoCallIcon from "@mui/icons-material/VideoCall"

export const VideoCall = ({ isTime }) => {
  return (
    <Button
      disabled={!isTime}
      style={{
        width: "100%",
        marginTop: "0.5rem",
      }}
      size="small"
    >
      {isTime ? (
        <>
          <Icon component={VideoCallIcon} color="info" fontSize="large" />
          <small>Start Call</small>
        </>
      ) : (
        <>Not Yet Time</>
      )}
    </Button>
  )
}
