import React, {useState, useEffect} from 'react';
import './App.scss';
import axios from 'axios'
import Header from './components/Header/Header';
import PokemonCard from './components/PokemonCard/PokemonCard';

function App() {

  const [pokemonData,setPokemonData] = useState([])

  const fetchPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=99")
    .then((response) =>{
      setPokemonData(response?.data?.results)
    })
    .catch((error) => {
      alert('Error while fetching pokemons', error)  
    })
  }
  useEffect(() =>{
    fetchPokemons();
  }, [])
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        {pokemonData?.map((pokemon, index) => {
          return (
            <PokemonCard key={pokemon?.name} pokemon={pokemon} id={index} />
          );
        })}
      </div>
      <div className='poke-button-div'>
        <button onClick={()=>{alert("Yay! You've reached the end")}}>Click Here</button>
      </div>
    </div>
  );
}

export default App;
