import React from "react";
import "./main.css";
import EachWinnerRecord from "./EachWinnerRecord";
import RankText from "./RankText";
import EachWinner from "./EachWinner";
import doge from "../images/doge.png";

const WinnerRecord = () => {
  return (
    <div className="winner-record-div">
      <div>#5 Winner Record</div>
      <div className="title-div">
        <div className="titleText">역대 고액 당첨자</div>
      </div>
      <div className="winner-record-layout">
        <div className="winner-record-ranking">
          <EachWinner
            rewardAmount={"52435802"}
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            userImage={doge}
            userInput={"부자되고싶어요"}
          />
          <EachWinner
            rewardAmount={"52435802"}
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            userImage={doge}
            userInput={"부자되고싶어요"}
          />
          <EachWinner
            rewardAmount={"52435802"}
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            userImage={doge}
            userInput={"부자되고싶어요"}
          />
          <EachWinner
            rewardAmount={"52435802"}
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            userImage={doge}
            userInput={"부자되고싶어요"}
          />
          <EachWinner
            rewardAmount={"52435802"}
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            userImage={doge}
            userInput={"부자되고싶어요"}
          />
          <EachWinner
            rewardAmount={"52435802"}
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            userImage={doge}
            userInput={"부자되고싶어요"}
          />
          <EachWinner
            rewardAmount={"52435802"}
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            userImage={doge}
            userInput={"부자되고싶어요"}
          />
          <EachWinner
            rewardAmount={"52435802"}
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            userImage={doge}
            userInput={"부자되고싶어요"}
          />
          <EachWinner
            rewardAmount={"52435802"}
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            userImage={doge}
            userInput={"부자되고싶어요"}
          />
          <EachWinner
            rewardAmount={"52435802"}
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            userImage={doge}
            userInput={"부자되고싶어요"}
          />
          
        </div>
      </div>
    </div>
  );
};

export default WinnerRecord;
