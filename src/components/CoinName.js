import React from "react";
import { Link } from "react-router-dom";
import "../css/Coinrow.css";

export default function CoinName(props) {
  return (
    <div>
      <div className="twoItems">
        <Link className="CoinLink" to={`/CoinInfo/${props.id}`}>
          <p>{props.rank}</p>
        </Link>
        <Link className="CoinLink" to={`/CoinInfo/${props.id}`}>
          <img
            className="logo-img"
            src={props.imageLocation}
            alt="img logo"
          ></img>
        </Link>
        <Link className="CoinLink" to={`/CoinInfo/${props.id}`}>
          <p>{props.name}</p>
        </Link>
      </div>
    </div>
  );
}
