import React, { useState } from "react";
import "../css/nav.css";
export const NavBarIcon = () => {
  const [active, setActive] = useState("");
  return (
    <div
      className={`navBarIcon ${active}`}
      onClick={() => (active === "" ? setActive("active") : setActive(""))}
    ></div>
  );
};
