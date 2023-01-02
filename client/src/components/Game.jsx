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

import CoinwithBadge from "./CoinwithBadge";
import CoinRenderSelector from "./CoinRenderSelector";

import { useState, useEffect } from "react";

import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const Game = () => {
  const coinList = {
    Bitcoin: { bitcoin },
    Ethereum: { ether },
    Bnb: { bnb },
    Ripple: { ripple },
    Bora: { bora },
    Wemix: { wemix },
    Klaytn: { klaytn },
    Klayswap: { klayswap },
    Marblex: { marblex },
    Orbit: { orbit },
  };
  const [selectedList, setSelectedList] = useState([]);
  const changeList = (selectedCoin) => {
    if (selectedList.length < 4) {
      setSelectedList((prevList) => [...prevList, selectedCoin]);
    }
  };

  const removeList = (selectedList) => {
    setSelectedList([]);
  };
  useEffect(() => {
    console.log("useEffect!!", selectedList);
  }, [selectedList]);
  return (
    <div className="game-div">
    
      <div>#2 Game</div>
      <div className="title-div">
        <div className="titleText">게임페이지</div>
      </div>
      <div className="coinContainerWrapper">
        <div className="coinContainer">
          <div className="gameWrapper">
            <div className="game-both-side-box-wrapper">
              <div className="game-left-box-wrapper">
                <div class="nes-container is-dark with-title predict">
                  <div className="coin-buttons-wrapper">
                    <div className="coin-buttons">
                      <CoinwithBadge
                        changeList={changeList}
                        coinImg={bitcoin}
                        coinName={"Bitcoin"}
                      />
                      <CoinwithBadge
                        changeList={changeList}
                        coinImg={ether}
                        coinName={"Ethereum"}
                      />
                      <CoinwithBadge
                        changeList={changeList}
                        coinImg={bnb}
                        coinName={"Bnb"}
                      />
                      <CoinwithBadge
                        changeList={changeList}
                        coinImg={ripple}
                        coinName={"Ripple"}
                      />
                      <CoinwithBadge
                        changeList={changeList}
                        coinImg={bora}
                        coinName={"Bora"}
                      />
                    </div>

                    <div className="coin-buttons">
                      <CoinwithBadge
                        changeList={changeList}
                        coinImg={wemix}
                        coinName={"Wemix"}
                      />
                      <CoinwithBadge
                        changeList={changeList}
                        coinImg={klaytn}
                        coinName={"Klaytn"}
                      />
                      <CoinwithBadge
                        changeList={changeList}
                        coinImg={klayswap}
                        coinName={"Klayswap"}
                      />
                      <CoinwithBadge
                        changeList={changeList}
                        coinImg={marblex}
                        coinName={"Marblex"}
                      />
                      <CoinwithBadge
                        changeList={changeList}
                        coinImg={orbit}
                        coinName={"Orbit"}
                      />
                    </div>
                  </div>

                  <div className="auto-reset-button-wrapper">
                    <button type="button" class="nes-btn two-button">
                      랜덤 고르기
                    </button>

                    <button
                      type="button"
                      class="nes-btn two-button"
                      onClick={removeList}
                    >
                      리셋하기
                    </button>
                  </div>
                </div>
              </div>

              <div className="submit-box">
                <div className="selected-coin-order">
                  <div className="selected-coin">
                    <div className="order-text">1st</div>

                    <div className="unselected-img"></div>
                  </div>
                  <div className="selected-coin">
                    <div className="order-text">2nd</div>
                    <div className="unselected-img"></div>
                  </div>
                  <div className="selected-coin">
                    <div className="order-text">3rd</div>
                    <div className="unselected-img"></div>
                  </div>
                  <div className="selected-coin">
                    <div className="order-text">4th</div>
                    <div className="unselected-img"></div>
                  </div>
                </div>
                <label for="textarea_field">했제의 한 마디</label>
                <textarea id="textarea_field" class="nes-textarea"></textarea>
                <button type="button" class="nes-btn is-warning">
                  예측하기
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
