import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      memes: [],
      searchField: "",
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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { memes, searchField } = this.state;
    const memesFiltered = memes.filter((meme) => {
      return meme.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">    
        <h1 className="app-title">Memes Rolodex</h1>
        <SearchBox 
          onChangeHandler={this.onSearchChange}          
          placeholder="search memes"
          />
        <CardList memesFiltered={memesFiltered} />
      </div>
    );
  }
}

export default App;
