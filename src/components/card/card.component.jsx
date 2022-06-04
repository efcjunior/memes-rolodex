import "./card.styles.css"

const Card = ({meme}) => {
  
    const {id, name, url} = meme;
    
    return (
      <div className="card-container" key={id}>
        <img height="180" width="180" alt={`Meme ${name}`} src={url} />
        <h2>{name}</h2>
        <p>{url}</p>
      </div>
    );
}

export default Card;