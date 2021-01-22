import React, { useContext, useEffect } from 'react';
import { PokemonContext } from './PokemonContext';
import { listPokemons } from './listPokemons';
import logo from './assets/logopokemon.png';

const url = "https://pokeapi.co/api/v2/pokemon?limit=500&offset=500";



const PokemonsList = () => {
  const { pokemons, capture, addPokemons } = useContext(PokemonContext);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url);
      const data = await response.json();
      addPokemons(data.results);
    };

    fetchPokemons();
  }, [addPokemons]);

  return (
    <div className="pokemons-list">
      <h2></h2>
      
      <h1>Todos PKMN</h1>
      <h2>Lista de Pokemons</h2>

      <table>
        <tr>
          <th>Pokemon</th>
          <th>URL</th>
          <th>Captura</th>
        </tr>
        {listPokemons({
          pokemons,
          onClick: capture,
          buttonLabel: 'Captura'
        })}
      </table>
    </div>
  )
}

export default PokemonsList;
