import React from "react";
import "../css/Exchange.css";

export default function ExchangeTable(props) {
  return (
    <div>
      <div className="stickyTop">
        <div className="flex-container">
          <div className="labels">
            <h3>Rank</h3>
          </div>
          <div className="labels">
            <h3>Exchange</h3>
          </div>
          <div className="labels">
            <h3>Trust Score</h3>
          </div>
          <div className="labels">
            <h3>Website</h3>
          </div>
          <div className="labels">
            <h3>Year Started</h3>
          </div>
          <div className="labels">
            <h3>24h Volume</h3>
          </div>
        </div>
      </div>
      {props.data && props.data.length > 0 ? (
        props.data.map((exchanges) => (
          <div className="container">
            <div key={exchanges.id} className="list-items">
              <div className="individuals twoItems">
                <p>{exchanges.trust_score_rank}</p>
                <img
                  className="logo-img"
                  src={exchanges.image}
                  alt="img logo"
                ></img>
              </div>
              <div className="individuals">
                <p>{exchanges.name}</p>
              </div>
              <div className="individuals">
                <p>{exchanges.trust_score}</p>
              </div>
              <div className="individuals url">
                <p>
                  <a target="_blank" href={exchanges.url}>
                    {exchanges.url}
                  </a>
                </p>
              </div>
              <div className="individuals">
                <p>{exchanges.year_established}</p>
              </div>
              <div className="individuals">
                <p>{`${Math.floor(exchanges.trade_volume_24h_btc)} BTC`}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}
