import React from "react";
import doge from "../images/doge.png";
import coin from "../images/coin.gif";
import happyDog from "../images/happyDog.png";
import EachWinner from "./EachWinner";

const Winner = () => {
  return (
    <div className="winner-div">
      <div> #3 Winner </div>

      <div className="title-div">
        <i class="nes-icon trophy is-large"></i>
        <div className="titleText">&nbsp; 이번주 했제왕</div>
      </div>

      <div className="winnerContainerWrapper">
        <EachWinner
          rewardAmount={"15000"}
          walletAddress={"0xd03123B2BEfA4103415B5eb94730680E1E3b29d2"}
          userImage={doge}
          userInput={"내가 말했제 이거 된다고"}
        />
        <EachWinner
          rewardAmount={"15000"}
          walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
          userImage={happyDog}
          userInput={"이 바보들아!"}
        />
      </div>
    </div>
  );
};

export default Winner;
