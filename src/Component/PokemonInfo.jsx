import React from 'react';
import PokemonType from '../PokemonTypes';



const Pokemonİnfo = ({ name: {english},  base }) => (
  <div> 
          <h2>{english}</h2>
          <table>
            <tbody>
            {
              Object.keys(base).map((key) => (
                <tr key={key}>
                   <td>{key}</td>
                   <td>{base[key]} </td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
)

Pokemonİnfo.propTypes = PokemonType;

export default Pokemonİnfo;