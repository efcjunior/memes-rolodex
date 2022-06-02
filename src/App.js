import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      memes: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((memes) =>
        this.setState(() => {
          return { memes: memes.data.memes };
        })
      );
  }

  prepareState(data, callback) {
    this.setState(()=> {
      return {memes: data}
    },)
  }

  render() {
    const memesFiltered = this.state.memes.filter((meme) => {
      return meme.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { searchField };
            });
          }}
          placeholder="search memes"
        />
        {memesFiltered.map((meme) => {
          return (
            <div key={meme.id}>
              <h1>{meme.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
