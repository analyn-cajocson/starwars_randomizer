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

export default AffiliationItemRow