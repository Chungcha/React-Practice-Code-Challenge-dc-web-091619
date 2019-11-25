import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis/?_limit=4"

class App extends React.Component {
  constructor(){
    super()
    this.state={
      shownSushi: [],
      wallet: "100",
      page: 1,
      plates: []
    }
  }

  componentDidMount(){
    fetch(`${API}&_page=${this.state.page}`)
    .then(response=>response.json())
    .then(data=>{
      this.setState({
        shownSushi: [...data]
      })
    })
  }

  renderMoreSushi = () => {
    this.setState({
      page: ++this.state.page
    })
    fetch(`${API}&_page=${this.state.page}`)
    .then(response=>response.json())
    .then(data=>{
      let newSushi = [...data]
      this.setState({
        shownSushi: newSushi
      })
    })
  }

  // eatSushi = (id) => {
  //   let updatedList = this.state.shownSushi.map(sushi=>{
  //     if (sushi.id === id){
  //       let newBudget = this.state.wallet - sushi.price
  //       if (newBudget < 0) {
  //         alert("Cant Eat this food.")
  //         return {...sushi, eaten: false}
  //       } else {
  //       this.setState({
  //         wallet: newBudget
  //       })}
  //       return {...sushi, eaten: true}
  //     } else {
  //       return sushi
  //     }
  //   })
  //   this.setState({
  //     shownSushi: updatedList
  //   })
  // }

    eatSushi = (id) => {
      let sushi = this.state.shownSushi.find(sushi=>sushi.id ===id)
      let newBudget = this.state.wallet - sushi.price
      if (newBudget < 0 || sushi.eaten === true){
        alert ("NO CAN DO")
      } else {
        let updatedList = this.state.shownSushi.map(sushi=>{
          if (sushi.id === id) {
            return {...sushi, eaten: true}
          } else {
            return sushi
          }
        })
        this.setState({
          wallet: newBudget,
          shownSushi: updatedList,
          plates: [...this.state.plates, id]
      })
      }
    }

  render() {
    return (
      <div className="app">
        <SushiContainer shownSushi={this.state.shownSushi} renderMoreSushi={this.renderMoreSushi} eatSushi={this.eatSushi}/>
        <Table wallet={this.state.wallet} plates={this.state.plates}/>
      </div>
    );
  }
}

export default App;