import React from 'react';
import AffiliationItemRow from './AffiliationItemRow';

class CharacterDetails extends React.Component {
  render(){
    const affiliations = this.props.affiliations.map((affiliation, i) => {
      return <AffiliationItemRow key={i} affiliation={affiliation} />
    })

    return(
      <>
        <img className="character-img" src={this.props.image} alt={this.props.name} />
        <h2>Name: {this.props.name}</h2>
        <h3>ID: {this.props.id}</h3>
        <p>Vote: {this.props.vote}</p>
        <p>Height: {this.props.height} cm</p>
        <p>Homeworld: {this.props.homeworld}</p>
        <div>
            <p>Affliations</p>
            <ul className="affliations-list">
                {
                  this.props.affiliations.length > 0 &&
                  <div>
                    {affiliations}
                  </div>
                }
            </ul>
        </div>
      </>
    )
  }
}

export default CharacterDetails