import React from 'react';

import styled from '@emotion/styled';

import './App.css';


import PokemonRow from './Component/PokemonRow';
import Pokemonİnfo from './Component/PokemonInfo';
import PokemonFilter from './Component/PokemonFilter';
import PokemonTable from './Component/PokemonTable';


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
  const [filter, filterSet] = React.useState("")
  const [pokemon, setPokemon] = React.useState([])
  const [selectedPokemon, selectedPokemonSet] =  React.useState(null)
 
React.useEffect(() => {
  (async()=>{
    const res  = await fetch("http://localhost:3000/jackson1/pokemon.json")
    const data = await res.json()
      setPokemon(data)
  })()
    
}, [])

if(!pokemon ){
  return <div>Loading data</div>
}



  return (
    <Container>
      <Title>Pokemon Search</Title>
        <TwoColumnLayout >

        <div>
        <PokemonFilter filter={filter} filterSet={filterSet} />
        <PokemonTable filter={filter} pokemon={pokemon} selectedPokemonSet={selectedPokemonSet} />
      
       </div> 
      {selectedPokemon && (
        < Pokemonİnfo {...selectedPokemon} />
      )}
      </TwoColumnLayout>
    </Container>
  );
}

export default App;