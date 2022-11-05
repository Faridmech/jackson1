import React from 'react';
import Button from '@mui/material/Button';




const PokemonRow = ({pokemon, onClick}) => (
    <>
    <tr key={pokemon.id}>
    <td> {pokemon.name.english} </td>
    <td>{pokemon.type.join(',')}</td>
    <td>{pokemon.name.japanese}</td>
    <td> {pokemon.base.HP} </td>
    <td>
      <Button variant="contained" color="success"
        onClick={() => onClick(pokemon)}
      >Select</Button>
    </td>
    </tr>
    </>
)




  export default PokemonRow;