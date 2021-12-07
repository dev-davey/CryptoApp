import React from "react";
import "../css/Header.css";
import bitcoin from "../img/bitcoin-logo.png";

function convertToInternationalCurrencySystem(labelValue) {
  // Nine Zeroes for Billions
  if (labelValue > 0.01) {
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
      : Math.abs(Number(labelValue)).toFixed(2);
  }
  if (labelValue < 0.01 && labelValue > 0.001) {
    return Math.abs(Number(labelValue)).toFixed(4);
  } else {
    return labelValue;
  }
}

const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function Header(props) {
  function convertToInternationalCurrencySystem(labelValue) {
    // Nine Zeroes for Billions
    if (labelValue > 0.01) {
      return Math.abs(Number(labelValue)) >= 1.0e9
        ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
        : // Six Zeroes for Millions
        Math.abs(Number(labelValue)) >= 1.0e6
        ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
        : // Three Zeroes for Thousands
        Math.abs(Number(labelValue)) >= 1.0e3
        ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
        : Math.abs(Number(labelValue)).toFixed(2);
    }
    if (labelValue < 0.01 && labelValue > 0.001) {
      return Math.abs(Number(labelValue)).toFixed(4);
    } else {
      return labelValue;
    }
  }

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  let change = props?.data[0]?.price_change_percentage_24h;
  let color = "";
  if (change <= 0) {
    color = "red";
  } else {
    color = "green";
  }

  return (
    <div className="headerContainer">
      <div className="leftSide">
        <h3>CryptoCurrencies By Market Cap</h3>
        <p classname="small-text">
          Top global 1000 CryptoCurrencies 24hr and 7d Change.
        </p>
      </div>
      <div className="rightSide">
        <img className="rotate" src={bitcoin} alt="" />
        <div className="leaderInfo">
          <p className="price">{props?.data[0]?.name}</p>
          <p className={color}>{`${formatter.format(change)}%`}</p>
          <p className="price">
            {"$" +
              convertToInternationalCurrencySystem(props?.data[0]?.market_cap)}
          </p>
        </div>
      </div>
    </div>
  );
}
