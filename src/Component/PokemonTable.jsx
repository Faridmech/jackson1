import React from "react"
import PokemonRow from "./PokemonRow";

const PokemonTable = (props) => (

<table width="100%">
   
        <tbody>
        {props.pokemon
          .filter((pokemon) => pokemon.name.english.toLowerCase().includes(props.filter.toLowerCase()))
          .slice(0, 20).map(pokemon => (
            <PokemonRow pokemon ={pokemon} key={pokemon.id} onClick={(pokemon) => props.selectedPokemonSet(pokemon)} />
          ))}
         
        </tbody>
        
      </table>
)

export default PokemonTable;



