import React, { useState } from "react";
import Logo from "../assets/Leo.jfif";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="logoName">LEO CLUB NITR</div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/"> Events </Link>
        <Link to="/"> Projects </Link>
        <Link to="/"> Team </Link>
        <Link to="/"> Contact </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
