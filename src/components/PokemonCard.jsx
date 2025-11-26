
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";


const PokemonCard = ({ pokemon, image, types, id, favorite } ) => {
  const dispatch = useDispatch();
  const typeString = types.map((elem) => elem.type.name).join(', '); 

  const handeOnFavorite = () => {
    dispatch(setFavorite({pokemonId: id}));
  }

  return <Card 
    title={pokemon}
    cover={<img alt="pokemon.name" src={image} />}
    extra={<StarButton isFavorite={favorite} onClick={handeOnFavorite} />}
  >
    <Meta description={typeString} />
  </Card>;
}

export default PokemonCard;