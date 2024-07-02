import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="underline">
      <div className="navbar">
        <h2>Portfolio</h2>
        <div className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Education">Education</Link>
            </li>

            <li>
              <Link to="/Skills">Skills</Link>
            </li>
            {/*}  <li>
              <a href="">Contact</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
