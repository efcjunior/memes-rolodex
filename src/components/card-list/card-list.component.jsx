import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ memesFiltered }) => (
  <div className="card-list">
    {memesFiltered.map((meme) => {
      return <Card key={meme.id} meme={meme} />;
    })}
  </div>
);

export default CardList;