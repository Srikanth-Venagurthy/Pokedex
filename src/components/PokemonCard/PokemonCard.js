import React, {useEffect, useState} from 'react'
import './PokemonCard.scss'

const PokemonCard = ({ pokemon, id }) => {
  const [reqId, setReqId] = useState()
  useEffect(() => {
  }, [])

  useEffect(() => {
    if (id < 10) {
      setReqId(`00${id + 1}`);
    } else if (id + 1 === 10) {
      console.log("10 condition: ", id);
      setReqId(`0${id + 1}`);
    } else if (10 < id < 100) {
      setReqId(`0${id + 1}`);
    } 
  },[])
  
  return (
    <div className="pokemoncard-container">
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${reqId}.png`}
        alt={pokemon?.name}
      />
      <p>{pokemon?.name}</p>
    </div>
  );
}

export default PokemonCard