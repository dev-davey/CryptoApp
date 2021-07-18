import React, { Component } from 'react'
import CoinList from './components/CoinList'
import StickyHeader from './components/StickyHeader';

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
      <div>
        <button onClick={this.nomicsCall}>nomics</button>
        <button onClick={this.apiCall}>hello</button>
        <StickyHeader/>
      {this.state.data ? (
      <CoinList 
        data={this.state.data}
      /> ): (<div></div>) 
      }

      </div>
    )
  }
}
