import './App.css';
import data from './db.json'
import {useState} from 'react';
import PokemonRow from './Components/PokemonRow';
import PokemonInfo from './Components/PokemonInfo';

function App() {

  const [filter, setFilter] = useState("")
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  console.log(selectedPokemon)

  return (
    <div className="App">

      <h1 className='title'>Pokémon Search</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '80% 20%',
        gridColumnGap: '1rem'
      }}>

      <div>
        <input type='text'
        value={filter}
        onChange={(e)=> setFilter(e.target.value)}/>
      <table width="100%">
        <tbody>
          
          {data.pokemon.filter(({name:{english}})=>
          english.toLocaleLowerCase().includes(filter.toLocaleLowerCase()
          )).slice(0, 100).map((pokemon)=>(
          <PokemonRow
            key={pokemon.id}
            pokemon={pokemon}
            setSelectedPokemon={setSelectedPokemon}
            />
          ))}

        </tbody>

      </table>
      </div>

      {selectedPokemon && <PokemonInfo {...selectedPokemon} />}

      </div>

    </div>
  );
}

export default App;