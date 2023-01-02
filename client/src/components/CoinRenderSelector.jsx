import React from 'react'
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

const CoinRenderSelector = ({ coinName }) => {
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

    const selectedCoin = coinList[coinName];
  return (
      <div className='coinRender'>
          {selectedCoin}
    </div>
  )
}

export default CoinRenderSelector