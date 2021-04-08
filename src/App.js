import './App.css';
import StarWars from './components/StarWars';
import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <section className="main-content">
        <div className="character-list">
          <StarWars />
          <StarWars />
        </div>
      </section>

      
    </div>
  );
}

export default App;
