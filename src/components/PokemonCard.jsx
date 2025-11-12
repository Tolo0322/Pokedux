import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";


const PokemonCard = ({ pokemon, image } ) => {
  return <Card 
    title={pokemon}
    cover={<img alt="pokemon.name" src={image} />}
    extra={<StarOutlined />}
  >
    <Meta description="fire, magic" />
  </Card>;
}

export default PokemonCard;