import React, { Component } from 'react'
import CoinList from './components/CoinList'
import StickyHeader from './components/StickyHeader';
import {
  BrowserRouter as Router, 
  Route, 
} from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      response: '',
      data: ''
    }
  }

  string = '1d'

  nomicsCall = () => { 
    fetch("https://api.nomics.com/v1/currencies/ticker?key=3d4688a133b735636eedb0cb329a8bcbcbf52de6&interval=1d,7d,30d&convert=USD&per-page=100&page=1")
    .then(response => response.json())
    .then(data => {console.log(data)
      this.setState({data: data}) 
    })
    .catch(error => console.log(error.message))
  }



  render() {
    return (
      <Router>
      
          <Route exact path="/" Component={App}></Route>
          <NavBar/>
          <StickyHeader/>
          <button onClick={this.nomicsCall}>nomics</button>
        {this.state.data ? (
        <CoinList 
          data={this.state.data}
        /> ): (<div></div>) 
        }

        </Router>
        )
  }
}
