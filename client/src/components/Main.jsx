import React from "react";
import "./main.css";
import coin from "../images/coin.gif";
import NavBar from "./Navbar";
import { Navbar } from "react-bootstrap";
import MainNavbar from "./MainNavbar";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="bigContainer">
      <MainNavbar />
      <div className="heroBoxWrapper">
        <div className="mal">
          <div class="nes-balloon from-right">
            <p>내가 사라고 했제?</p>
          </div>

          <div class="nes-balloon from-left">
            <p>내가 팔라고 그랬제?</p>
          </div>
        </div>
        <div className="textDiv">
          <container className="henselAndGretel">했제와 그랬제</container>
          코인 순위를 예측하고 보상을 획득하세요 &nbsp;
          <img className="coinImage" src={coin} alt="spinning coin" /> <br />
          <br></br>
          <Link to="game" spy={true} smooth={true}>
            <button type="button" class="nes-btn is-warning">
              예측하러 가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
