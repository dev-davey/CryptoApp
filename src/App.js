import React, { Component } from 'react'
import CoinList from './components/CoinList'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      response: '',
      data: ''
    }
  }
 
 
 
  apiCall = () => {
    let baseUrl = "https://api.coinranking.com/v2/coins"
    let proxyUrl = "https://cors-anywhere.herokuapp.com/"
    let apiKey = "coinranking080fa3bfd720da3fc60a055162b0c049eb0ddfeb92a074de"

    fetch(`${proxyUrl}${baseUrl}`, {
	"method": "GET",
	"headers": {
    "Content-Type" : "application/json",
		"x-rapidapi-key": `${apiKey}`,
    "Access-Control-Allow-Origin" : "*"
	}
})
.then(response => {
	if(response.ok){
    response.json().then((json) => {
      console.log(json)
      this.setState({response: json})
      this.setState({data : this.state.response.data})
    })
  }
})
.catch(err => {
	console.error(err);
});
  }



  render() {
    return (
      <div>
        <button onClick={this.apiCall}>hello</button>
      {this.state.data ? (
      <CoinList 
        data={this.state.data}
      /> ): (<div></div>) 
      }

      </div>
    )
  }
}
