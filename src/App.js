import React, { Component } from "react";
import CoinList from "./components/CoinList";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import "./css/App.css";
import NavBar from "./components/NavBar";
import CoinInfo from "./components/CoinInfo";
import Header from "./components/Header";
import News from "./components/News";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
      data: "",
      searchInput: "",
      searchData: "",
      filteredData: "",
    };
  }

  string = "1d";

  componentDidMount() {
    this.geckoCall();
  }

  geckoCall = (page) => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=${page}&sparkline=false&price_change_percentage=24h%2C7d`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
        this.filterCoins("");
      })
      .catch((error) => console.log(error.message));
  };

  filterCoins = (val) => {
    let searchCoins = this.state.data.filter((searchCoins) =>
      searchCoins.id.toLowerCase().includes(val.toLowerCase())
    );
    this.setState({ filteredData: searchCoins });
  };

  handleChange = (event) => {
    let value = event.target.value;
    this.setState({ searchInput: value });
    console.log(this.state.searchInput);
    this.filterCoins(value);
  };

  render() {
    return (
      <HashRouter>
        <Route exact path="/" Component={App}>
          <NavBar />
          <form className="searchForm" onSubmit={this.searchCall}>
            <input
              onclick="this.select"
              type="text"
              className="searchInput"
              onChange={this.handleChange}
              placeholder="Search"
            />
          </form>
          {this.state.data ? <Header data={this.state.data} /> : <div></div>}
          <div className="scroll">
            {this.state.data && this.state.filteredData ? (
              <div>
                <CoinList data={this.state.filteredData} />
              </div>
            ) : (
              <div>
                <h3>Loading...</h3>
              </div>
            )}
          </div>

          <div className="coin-pages">
            <button onClick={() => this.geckoCall(1)}>1</button>
            <button onClick={() => this.geckoCall(2)}>2</button>
            <button onClick={() => this.geckoCall(3)}>3</button>
            <button onClick={() => this.geckoCall(4)}>4</button>
            <button onClick={() => this.geckoCall(5)}>5</button>
          </div>
          <Footer />
        </Route>

        <Route path="/CoinInfo/:id" component={CoinInfo}></Route>
        <Route exact path="/News" component={News}></Route>
        <Route exact path="/Exchanges" component={Exchanges}></Route>
      </HashRouter>
    );
  }
}
