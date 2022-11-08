import React, { useContext } from 'react';
import PokemonContext from '../PokemonContex';
import PokemonType from '../PokemonTypes';



const Pokemonİnfo = () => {
  const {state: {selectedPokemon}} = useContext(PokemonContext)
  return selectedPokemon ?(
  <div> 
          <h2>{selectedPokemon.name.nglish}</h2>
          <table>
            <tbody>
            {
              Object.keys(selectedPokemon.base).map((key) => (
                <tr key={key}>
                   <td>{key}</td>
                   <td>{selectedPokemon.base[key]} </td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
) : null
          }

Pokemonİnfo.propTypes = PokemonType;

export default Pokemonİnfo;