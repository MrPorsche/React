import React from "react";
import PropTypes from 'prop-types'
// import { Button } from 'reactstrap';
import { Button } from '@mui/material';


const PokemonRow = ({ pokemon, setSelectedPokemon })=>(
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <Button
      variant="contained"
      onClick={() => setSelectedPokemon (pokemon)}
      >More Info</Button>
      {/*<Button
      color="primary"
      onClick={() => setSelectedPokemon (pokemon)}>
      More Info
      </Button>*/}
      {/*<button onClick={() => setSelectedPokemon (pokemon)}
      >More Info</button>*/}
    </td>
  </tr>
)

PokemonRow.propTypes ={
  pokemon: PropTypes.shape ({
    id: PropTypes.number.isRequired,
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }),
    type: PropTypes.arrayOf(PropTypes.string.isRequired)
  })
};

export default PokemonRow