import React from 'react';
import PropTypes, { func } from "prop-types"
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import './App.css';


const PokemonRow = ({pokemon, onSelect}) => (
                    <tr>
                    <td> {pokemon.name.english} </td>
                    <td>{pokemon.type.join(',')}</td>
                    <td>{pokemon.name.japanese}</td>
                    <td> {pokemon.base.HP} </td>
                    <td>
                      <Button variant="contained" color="success"
                        onClick={() => onSelect(pokemon)}
                      >Select</Button>
                    </td>
                    </tr>
)


PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
  name: PropTypes.shape({
        english: PropTypes.string.isRequired,
 
      }),
      type: PropTypes.arrayOf(PropTypes.string.isRequired), 
      }),
     onSelect: PropTypes.func.isRequired,

}

const Pokemonİnfo = ({ name, base }) => (
  <div> 
          <h1>{name.english}</h1>
          <table>
            {
              Object.keys(base).map(key => (
                <tr key={key}>
                   <td>{key}</td>
                   <td>{base[key]} </td>
                </tr>
              ))
            }
          </table>
        </div>
)

Pokemonİnfo.propTypes ={
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,

  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "SP. Attack": PropTypes.number.isRequired, 
    "SP. Defense": PropTypes.number.isRequired, 
    Speed: PropTypes.number.isRequired, 
  }),
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
    width: 1000px;
    padding-top: 1rem;
`;

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filter: "" ,
      pokemon: [],
      selectedItem: null,
    }
  }


  componentDidMount() {
    fetch("http://localhost:3000/jackson1/pokemon.json")
       .then((resp) => resp.json())
       .then((data) => this.setState({
        ... this.state,
        pokemon: data,
       }))
  }

  render() {
  return(
    <Container>
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
        < Input
      value={this.state.filter}
      onChange={(evt) => this.setState({...this.state,
        filter: evt.target.value })}
      />
      <table width="100%">
        <thead>
          <tr>
            <th>Name1</th>
            <th>Type</th>
            <th>Language1</th>
            <th>Base</th>
          </tr>
        </thead>
        <tbody>
          {this.state.pokemon
          .filter((pokemon) => pokemon.name.english.toLowerCase().includes(this.state.filter.toLowerCase()))
          .slice(0, 20).map(pokemon => (
            <PokemonRow pokemon ={pokemon} key={pokemon.id} onSelect={(pokemon) => this.setState({
              ...this.state,
              selectedItem: pokemon
            })} />
          ))}
        </tbody>
      </table>
      </div>
      {this.state.selectedItem && (
        < Pokemonİnfo {... this.state.selectedItem} />
      )}
      </TwoColumnLayout>
    </Container>
  )
  }
}


export default App;
