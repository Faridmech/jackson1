import React from "react"
import { useContext } from "react";
import PokemonContext from "../PokemonContex";
import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
const {state: {pokemon, filter}, dispatch,} = useContext(PokemonContext)
return (

<table width="100%">
   
        <tbody>
        {pokemon
          .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
          .slice(0, 20).map(pokemon => (
            <PokemonRow pokemon ={pokemon} key={pokemon.id} onClick={(pokemon) => dispatch({
              type: 'SET_SELECTEDPOKEMON',
              payload: pokemon,
            })} />
          ))}
         
        </tbody>
        
      </table>
)
          }

export default PokemonTable;



