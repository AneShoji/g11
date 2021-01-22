import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
import { listPokemons } from './listPokemons';

const Pokedex = () => {
  const { capturedPokemons, release } = useContext(PokemonContext);

  return (
    <div className="pokedex">
      
      <h1>Meus PKMN</h1>
      <h2>Lista de Pokemons</h2>

      <table>
        <tr>
          <th>Pokemon</th>
          <th>URL</th>
          <th>Soltar</th>
        </tr>
        {listPokemons({
          pokemons: capturedPokemons,
          onClick: release,
          buttonLabel: 'Solta'
        })}
      </table>
    </div>
  )
}

export default Pokedex;
