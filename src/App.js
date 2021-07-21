import React, { Component } from 'react'
import CoinList from './components/CoinList'
import StickyHeader from './components/StickyHeader';
import {
  BrowserRouter as Router, 
  Route, Switch 
} from 'react-router-dom';
import './css/App.css'
import NavBar from './components/NavBar';
import CoinInfo from './components/CoinInfo';


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
    fetch(`https://api.nomics.com/v1/currencies/ticker?key=3d4688a133b735636eedb0cb329a8bcbcbf52de6&interval=1d,7d,30d&convert=USD&per-page=100&page=${page}`)
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
          <StickyHeader/>
        {this.state.data ? (
          <div>
          <CoinList 
           data={this.state.data}
          /> 
          </div>
          ): (<div></div>) 
          }
          
          <div className="coin-pages">
            <button onClick={()=>this.nomicsCall(1)}>1</button>
            <button onClick={()=>this.nomicsCall(2)}>2</button>
            <button onClick={()=>this.nomicsCall(3)}>3</button>
            <button onClick={()=>this.nomicsCall(4)}>4</button>
            <button onClick={()=>this.nomicsCall(5)}>5</button>
          </div>
          </Route>
          <Route exact path="/CoinInfo/:id" component={CoinInfo}></Route>
        </Router>
        )}
}
