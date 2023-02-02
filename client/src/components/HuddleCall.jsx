import { useEffect } from "react"

import { huddleIframeApp, HuddleIframe } from "@huddle01/huddle01-iframe"

export const HuddleCall = ({ meetId }) => {
  const iframeConfig = {
    roomUrl: `https://iframe.huddle01.com/${meetId}`,
    height: "580px",
    width: "90%",
    border: false,
  }

  useEffect(() => {
    huddleIframeApp.on("peer-join", (data) => console.log({ iframeData: data }))
    huddleIframeApp.on("peer-left", (data) => console.log({ iframeData: data }))
  }, [])

  return (
    <div className="container">
      <HuddleIframe config={iframeConfig} />
    </div>
  )
}
