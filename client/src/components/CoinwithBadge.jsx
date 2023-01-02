import React from "react";
import "./main.css";
import bitcoin from "../images/bitcoin.png";
import ether from "../images/ether.png";
import bnb from "../images/bnb.png";
import ripple from "../images/ripple.png";
import bora from "../images/bora.png";
import wemix from "../images/wemix.png";
import klayswap from "../images/klayswap.png";
import klaytn from "../images/klaytn.png";
import marblex from "../images/marblex.png";
import orbit from "../images/orbit.png";

import { Button } from "react-bootstrap";

import { useState } from "react";

const CoinwithBadge = ({ coinImg, coinName, changeList }) => {
  const coinList = [
    { name: "Bitcoin", img: { bitcoin } },
    { name: "Ethereum", img: { ether } },
    { name: "Bnb", img: { bnb } },
    { name: "Ripple", img: { ripple } },
    { name: "Bora", img: { bora } },
  ];

  const changeSelectedList = (coinName) => {
    changeList(coinName);
    console.log(coinName);
    
  };

  return (
    <div>
      <div className="coin-with-badge-wrapper">
        <button
          className="coin-button-wrapper"
          onClick={() => {
            changeSelectedList({ coinName });
          }}
        >
          <img className="coin-button-img" src={coinImg} alt="my image" />
        </button>
        {coinName}
      </div>
    </div>
  );
};

export default CoinwithBadge;
