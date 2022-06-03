import { Component } from "react";
import Card from "../card/card.component"
import "./card-list.styles.css";


class CardList extends Component {
  render() {
    const { memesFiltered } = this.props;

    return (
      <div className="card-list">
        {memesFiltered.map((meme) => {
          return (
            <Card meme={meme}/>
          );
        })}
      </div>
    );
  }
}

export default CardList;
