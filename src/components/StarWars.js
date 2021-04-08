import React from 'react';
import CharacterDetails from './CharacterDetails'

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
    return(
      <div className="character-item">
        <h1>{this.props.name}</h1>
      {
        this.state.loadedCharacter &&
        <div className="character-details">
          <CharacterDetails id={this.state.id} name={this.state.name} vote={this.state.vote}
            height={this.state.height} homeworld={this.state.homeworld}
            image={this.state.image} affiliations={this.state.affiliations}
            />
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