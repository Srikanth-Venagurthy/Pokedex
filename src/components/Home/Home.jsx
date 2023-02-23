import React, {useState, useEffect} from 'react'
import './Home.scss'
import axios from 'axios'
import Header from '../Header/Header';
import PokemonCard from '../PokemonCard/PokemonCard';
import PromptInstall from '../PromptInstall/PromptInstall'

const Home = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [showPrompt, setShowPrompt] = useState(true);

  const fetchPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=99")
      .then((response) => {
        setPokemonData(response?.data?.results);
      })
      .catch((error) => {
        alert("Error while fetching pokemons", error);
      });
    };
    
    useEffect(() => {
        fetchPokemons();
    }, []);
  return (
      <div className='home-container'>
      {showPrompt && <PromptInstall closeModal={setShowPrompt} />}
      <Header />
      <div className="app-body">
        {pokemonData?.map((pokemon, index) => {
          return (
            <PokemonCard key={pokemon?.name} pokemon={pokemon} id={index} />
          );
        })}
      </div>
      <div className="poke-button-div">
        <button
          onClick={() => {
            alert("Yay! You've reached the end");
          }}
        >
          Click Here
        </button>
          </div>
      </div>
  )
}

export default Home