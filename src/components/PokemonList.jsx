import PokemonCard from "./PokemonCard";
import './PokemonList.css'


const PokemonList = ({ pokemons = Array(10).fill('') }) => {
  console.log(pokemons);
  return (
    <div className="pokemonList">
    { pokemons.map((pokemon, index) => {
        return <PokemonCard key={index} pokemon={pokemon.name} />
    })}
  </div>
  )
}
;

export default PokemonList;