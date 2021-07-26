import React, { Component } from 'react'
import CoinList from './components/CoinList'
import StickyHeader from './components/StickyHeader';
import {
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import './css/App.css'
import NavBar from './components/NavBar';
import CoinInfo from './components/CoinInfo';
import Header from './components/Header';
import News from './components/News'
import HeatMap from './components/HeatMap';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      response: '',
      data: '',
    }
  }

  string = '1d'

 componentDidMount(){
   this.nomicsCall(1)
 }

  nomicsCall = (page) => {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&price_change_percentage=24h%2C7d`)
    .then(response => response.json())
    .then(data => {console.log(data)
      this.setState({data: data}) 
    })
    .catch(error => console.log(error.message))
  }


  render() {
    return (
      <Router>
          <Route exact path="/" Component={App}>
              <NavBar/>
              {this.state.data ? 
              <Header 
                data={this.state.data}
              />
              : <div></div>}
              <div className="scroll">
                <StickyHeader/>
                {this.state.data ? (
                <div>
                  <CoinList 
                  data={this.state.data}
                  /> 
                </div>
                ): (<div></div>) 
                }
              </div>
              
              <div className="coin-pages">
                <button onClick={()=>this.nomicsCall(1)}>1</button>
                <button onClick={()=>this.nomicsCall(2)}>2</button>
                <button onClick={()=>this.nomicsCall(3)}>3</button>
                <button onClick={()=>this.nomicsCall(4)}>4</button>
                <button onClick={()=>this.nomicsCall(5)}>5</button>
              </div>
          </Route>
          <Route exact path="/CoinInfo/:id" component={CoinInfo}></Route>
          <Route exact path="/News" component={News}></Route>
          <Route exact path="/HeatMaps" component={HeatMap}></Route>
        </Router>
          
        )}
}
