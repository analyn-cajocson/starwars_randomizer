import './App.css';
import React from 'react';

class AffiliationItemRow extends React.Component {
  render(){
    return(
      <li>
        {this.props.affiliation}      
      </li>
    )
  }
}

class StarWars extends React.Component {

  constructor(){
    super()
    this.state = {
      name: null,
      height: null,
      homeworld: null,
      image: null,
      affiliations: [],
      loadedCharacter: false
    }
  }

  getNewCharacter() {
    const randomNumber = Math.round( Math.random() * 88)
    // const url = `https://swapi.dev/api/people/${randomNumber}/`
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          image: data.image,
          affiliations: data.affiliations,
          loadedCharacter: true
        })
      })
  }


  render(){
    
    const affiliations = this.state.affiliations.map((affiliation, i) => {
      return <AffiliationItemRow key={i} affiliation={affiliation} />
    })

    return(
      <div>
      {
        this.state.loadedCharacter &&
        <div>
          <img className="character-img" src={this.state.image} alt={this.state.name} />
          <h1>Name: {this.state.name}</h1>
          <p>Height: {this.state.height} cm</p>
          <p>Homeworld: {this.state.homeworld}</p>
          <div>
              <p>Affliations</p>
              <ul className="affliations-list">
                 {
                   this.state.affiliations.length > 0 &&
                   <div>
                     {affiliations}
                   </div>
                 }
              </ul>
          </div>
        </div>
      }
        <button type="button" onClick={() => this.getNewCharacter()} className="btn">Randomize Character</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
