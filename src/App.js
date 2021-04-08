import './App.css';
import StarWars from './components/StarWars';
import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h>StarWars Character Face-off</h>
      </header>

      <section className="main-content">
        <div className="character-list">
          <StarWars name="First Character" />
          <StarWars name="Second Character" />
        </div>
      </section>

      
    </div>
  );
}

export default App;
