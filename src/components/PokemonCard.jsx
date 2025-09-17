import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";


const PokemonCard = ({ pokemon } ) => {
  return <Card 
    title={pokemon}
    cover={<img alt="ditto" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />}
    extra={<StarOutlined />}
  >
    <Meta description="fire, magic" />
  </Card>;
}

export default PokemonCard;