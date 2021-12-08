import React from "react";
import CoinRow from "./CoinRow";
import CoinName from "./CoinName";
import "../css/Coinlist.css";

const CoinList = (props) => {
  let coins = props.data;

  let coinSearch = coins.map((coins) => (
    <CoinRow
      key={coins.id}
      id={coins.id}
      imageLocation={coins?.image ? coins.image : ""}
      rank={coins?.market_cap_rank ? coins.market_cap_rank : ""}
      name={coins?.name ? coins.name : ""}
      symbol={coins?.symbol ? coins.symbol : ""}
      marketCap={coins?.market_cap ? coins.market_cap : ""}
      price={coins?.current_price ? coins.current_price : ""}
      change={
        coins?.price_change_percentage_24h
          ? coins.price_change_percentage_24h
          : ""
      }
      weekChange={
        coins?.price_change_percentage_7d_in_currency
          ? coins.price_change_percentage_7d_in_currency
          : ""
      }
      volume={coins?.total_volume ? coins.total_volume : ""}
      circulatingSupply={
        coins?.circulating_supply ? coins.circulating_supply : ""
      }
    />
  ));

  let coinSearch2 = coins.map((coins) => (
    <CoinName
      key={coins.id}
      id={coins.id}
      imageLocation={coins?.image ? coins.image : ""}
      rank={coins?.market_cap_rank ? coins.market_cap_rank : ""}
      name={coins?.name ? coins.name : ""}
    />
  ));

  return (
    <div className="coinlist-container">
      <div className="name-container">
        <div className="twoItems">
          <h3>Rank</h3>
        </div>
        {coinSearch2}
      </div>
      <div className="coinmetric-container">
        <div className="all-labels-container">
          <div className="label">
            <h3>Price</h3>
          </div>
          <div className="label">
            <h3>Market Cap</h3>
          </div>
          <div className="label">
            <h3>24hr Change</h3>
          </div>
          <div className="label">
            <h3>7d Change</h3>
          </div>
          <div className="label">
            <h3>24hr Volume</h3>
          </div>
          <div className="label">
            <h3>Supply</h3>
          </div>
        </div>
        {coinSearch}
      </div>
    </div>
  );
};

export default CoinList;
