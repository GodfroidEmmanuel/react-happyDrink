import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { establishments } from './components/establishments/fixtures'
import Establishment from '../src/components/establishments/Establishment'

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
          pseudo: "inconnu",
          searchStringUser: ""
          
      }
      this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount () {
    console.log("componentWillMount")
}

componentDidMount () {
    console.log("componentDidMount")
}




handleChange = (e) => {
  this.setState({searchStringUser: e.target.value})
}

  randomPseudo = () => {
    let randomPseudo = ""
    const lettres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const size = Math.floor(Math.random()*10)+5

    for (let i = 0; i< size; i++){
      randomPseudo += lettres.charAt(Math.floor(Math.random()* lettres.length))
    }
    this.setState({
      pseudo: randomPseudo
    })
  }
  
  render() { 
    const establishmentFilter = establishments.filter((searchText) => {
      let search = searchText.name + " " + searchText.description;
      return search.toLowerCase().match(this.state.searchStringUser);
  });

  const listEstablishment = establishmentFilter.map( (establishment) => {
    return (
        <Establishment
            key={ establishment.id }
            establishment={ establishment } 
        />
    )
  });
    console.log('render')
   
    return ( 
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome {this.state.pseudo} to {this.props.title} ! </h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="app-intro">
      <p> <a onClick={ this.randomPseudo } >Changer le pseudo !</a> </p>
      <div>
      <input
          type="text"
          placeholder="search"
          value={this.state.searchStringUser}
          onChange={this.handleChange}
      />
      </div>
  <section>
        {listEstablishment}
        </section>
      </div>
    </div>
     );
  }
}

export default App;
