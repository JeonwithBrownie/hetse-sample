import React from 'react'
import "./main.css";
import cookie1 from "../images/cookie1.gif";
import cookie2 from "../images/cookie2.gif";
import cookie3 from "../images/cookie3.gif";
import cookie4 from "../images/cookie4.gif";
import cookie5 from "../images/cookie5.gif";
import cookie6 from "../images/cookie6.gif";
import cookie7 from "../images/cookie7.gif";
import cookie8 from "../images/cookie8.gif";
import cookie9 from "../images/cookie9.gif";
import cookie10 from "../images/cookie10.gif";

const RealTimeCookie = () => {
  return (
    <div className="cookies">
      <img className="cookie" src={cookie1}></img>
      <img className="cookie" src={cookie2}></img>
      <img className="cookie" src={cookie3}></img>
      <img className="cookie" src={cookie4}></img>
      <img className="cookie" src={cookie5}></img>
      <img className="cookie" src={cookie6}></img>
      <img className="cookie" src={cookie7}></img>
      <img className="cookie" src={cookie8}></img>
      <img className="cookie" src={cookie9}></img>
      <img className="cookie" src={cookie10}></img>
    </div>
  );
}

export default RealTimeCookie