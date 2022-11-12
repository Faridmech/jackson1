import React from 'react';

import styled from '@emotion/styled';

import './App.css';


import PokemonRow from './Component/PokemonRow';
import Pokemonİnfo from './Component/PokemonInfo';
import PokemonFilter from './Component/PokemonFilter';
import PokemonTable from './Component/PokemonTable';

import PokemonContext from './PokemonContex';

const pokemonReducer = (state , action) => {
   switch(action.type){
    case 'SET_FILTER':
      return{
        ...state,
        filter: action.payload, 
      };

      case 'SET_POKEMON':
      return{
        ...state,
        pokemon: action.payload, 
      };

      case 'SET_SELECTEDPOKEMON':
      return{
        ...state,
        selectedPokemon: action.payload, 
      };
      default:
        return state,
   }
}


const Title = styled.h1`
text-align: center;
`;

const TwoColumnLayout = styled.div`
                 display: grid;
                grid-template-columns: 80% 100%;
                grid-column-gap: 1rem; 
`;

const Container = styled.div`
    marign: auto;
    width: 800px;
    padding-top: 1rem;
`;





function App() {
 
  const [state,dispatch] = React.useReducer(pokemonReducer, {
    pokemon: [],
    filter: '',
    selectedPokemon: null,
  })
 
React.useEffect(() => {
  (async()=>{
    const res  = await fetch("http://localhost:3000/jackson1/pokemon.json")
    const data = await res.json()
      dispatch({
        type: "SET_POKEMON",
        payload: data,
      })
  })()
    
}, [])

if(!state.pokemon ){
  return <div>Loading data</div>
}
  return (
    <PokemonContext.Provider
    value={{
      state, 
      dispatch,
    }}
    >
      <Container>
          <Title>Pokemon Search1</Title>
            <TwoColumnLayout >
            <div>
            <PokemonFilter  />
            <PokemonTable />
             </div> 
          < Pokemonİnfo />
          </TwoColumnLayout>
      </Container>
    </PokemonContext.Provider>
    
  );
}

export default App;