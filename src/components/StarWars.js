import React from 'react';
import AffiliationItemRow from './AffiliationItemRow'

class StarWars extends React.Component {

  constructor(){
    super()
    this.state = {
      id: null,
      name: null,
      height: null,
      homeworld: null,
      image: null,
      affiliations: [],
      loadedCharacter: false,
      vote: 0
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
          id: data.id,
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          image: data.image,
          affiliations: data.affiliations,
          loadedCharacter: true,
          vote: (data.id in localStorage) ? parseInt(localStorage.getItem(data.id)) : 0
        })
      })
  }

  upvoteCharacter() {
    this.setState({
      vote: this.state.vote + 1
    })
    localStorage.setItem(this.state.id, this.state.vote + 1);
  }

  render(){
    
    const affiliations = this.state.affiliations.map((affiliation, i) => {
      return <AffiliationItemRow key={i} affiliation={affiliation} />
    })

    return(
      <div className="character-item">
        <h1>{this.props.name}</h1>
      {
        this.state.loadedCharacter &&
        <div>
          <img className="character-img" src={this.state.image} alt={this.state.name} />
          <h2>Name: {this.state.name}</h2>
          <h3>ID: {this.state.id}</h3>
          <p>Vote: {this.state.vote}</p>
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
          <div>
            <button type="button" onClick={() => this.upvoteCharacter()} className="btn btn-vote">Vote</button>
          </div>
        </div>
      }
        <button type="button" onClick={() => this.getNewCharacter()} className="btn">Randomize Character</button>
      </div>
    )
  }
}
  
  export default StarWars