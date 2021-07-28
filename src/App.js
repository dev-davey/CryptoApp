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
      searchInput:'',
      searchData: '',
    }
  }

  string = '1d'

 componentDidMount(){
   this.geckoCall()
 }

  geckoCall = (page) => {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=${page}&sparkline=false&price_change_percentage=24h%2C7d`)
    .then(response => response.json())
    .then(data => {console.log(data)
      this.setState({data: data})
      this.filterCoins('') 
    })
    .catch(error => console.log(error.message))
  }

  

  filterCoins = (val) => {
    let searchCoins = this.state.data.filter(searchCoins => 
      searchCoins.id.includes(val)
      )
      this.setState({filteredData: searchCoins})
  }


  handleChange = (event) => {
    let value = event.target.value
    this.setState({searchInput: value})
    console.log(this.state.searchInput)
    if(this.state.searchInput == ''){
      this.setState({filteredData: this.state.data})
    }
    this.filterCoins(value)
  }

  render() {
    return (
      <Router>
          <Route exact path="/" Component={App}>
              <NavBar/>
              <form className="searchForm" onSubmit={this.searchCall}>
                <input type="text" className="searchInput" onChange={this.handleChange} placeholder="Search By Name"/>
              </form>
              {this.state.data ? 
              <Header 
                data={this.state.data}
              />
              : <div></div>}
              <div className="scroll">
                <StickyHeader/>
                {this.state.data && this.state.filteredData ? (
                <div>
                  <CoinList 
                  data={this.state.filteredData}
                  /> 
                </div>
                ): (<div></div>) 
                }
              </div>
              
              <div className="coin-pages">
                <button onClick={()=>this.geckoCall(1)}>1</button>
                <button onClick={()=>this.geckoCall(2)}>2</button>
                <button onClick={()=>this.geckoCall(3)}>3</button>
                <button onClick={()=>this.geckoCall(4)}>4</button>
                <button onClick={()=>this.geckoCall(5)}>5</button>
              </div>
          </Route>
          <Route exact path="/CoinInfo/:id" component={CoinInfo}></Route>
          <Route exact path="/News" component={News}></Route>
          <Route exact path="/HeatMaps" component={HeatMap}></Route>
        </Router>
          
        )}
}
