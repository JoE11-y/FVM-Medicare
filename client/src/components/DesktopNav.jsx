import React from "react";
import { Link } from "react-router-dom";

export const DesktopNav = ({ style }) => {
  return (
    <ul className="desktop-nav">
      <li>
        <Link to={"/"} style={style}>
          FVM Hackathon
        </Link>
      </li>
      <li>
        <a
          href={`https://github.com/JoE11-y/FVM-Medicare/blob/master/client/README.md`}
          target="_blank"
          rel="noreferrer"
          style={style}
        >
          Documentation
        </a>
      </li>
    </ul>
  );
};
