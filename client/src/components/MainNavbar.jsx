import React from "react";

import "./main.css";
import metamaskItem from "../images/metamaskItem.gif";
import { Link } from "react-scroll";

const MainNavbar = () => {
  function scrollMoveTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <div className="main-navbar">
      <button className="navItem" onClick={scrollMoveTop}>
        Hetse and Gretse
      </button>
      <Link to="game" spy={true} smooth={true}>
        <button className="navItem">Game</button>
      </Link>

      <Link to="winner" spy={true} smooth={true}>
        <button className="navItem">Winner</button>
      </Link>
      <Link to="history" spy={true} smooth={true}>
        <button className="navItem">History</button>
      </Link>
      <button className="navItem">Mypage</button>
      <img className="fox" src={metamaskItem} alt="metamaskItem" />
    </div>
  );
};

export default MainNavbar;
