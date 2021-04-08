import './App.css';
import StarWars from './components/StarWars';
import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>StarWars Character Face-off</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
        </ul>
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
