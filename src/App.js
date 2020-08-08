import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  render(){
    return (
      <div>
        <Header/>
        { this.state.display
            ?
          <ToyForm/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
          {console.log(this.state.toys)}
        </div>
        <ToyContainer data={this.state.toys}/>
      </div>
    );
  }

  componentDidMount() {
    fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        display: false,
        toys: data
      })
    })
  }

}

export default App;
