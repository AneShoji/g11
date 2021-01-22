import React from 'react';

import { PokemonProvider } from './components/PokemonContext';
import PokemonsList from './components/PokemonsList';
import Pokedex from './components/Pokedex';
import side from './components/assets/wp.jpg';


const App = () => (
  <PokemonProvider>
    <div className="main">
      <img src={side}/>
      <PokemonsList />
      <Pokedex />
    </div>
    
  </PokemonProvider>
);

export default App;
