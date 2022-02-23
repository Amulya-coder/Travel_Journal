import React from "react";

export default function Header() {
  return (
    <div>
      <nav>
        <img
          className="nav--icon"
          src="../images/Browse.png"
          alt="browse_icon"
        ></img>
        <h4 className="nav--text">my travel journal</h4>
      </nav>
    </div>
  );
}
