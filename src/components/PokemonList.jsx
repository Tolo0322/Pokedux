import PokemonCard from "./PokemonCard";
import './PokemonList.css'


const PokemonList = ({ pokemons = Array(10).fill('') }) => {
  console.log(pokemons);
  return (
    <div className="pokemonList">
    { pokemons.map((pokemon, index) => {
        return <PokemonCard
        key={index}
        pokemon={pokemon.name} 
        image={pokemon.sprites.front_default}
        types={pokemon.types}
        id={pokemon.id}
        favorite={pokemon.favorite} 
      />
    })}
  </div>
  )
}
;

export default PokemonList;