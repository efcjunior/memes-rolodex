import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [memes, setMemes] = useState([]);
  const [filteredMemes, setFilteredMemes] = useState(memes);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((memes) => setMemes(memes.data.memes));
  }, []);

  useEffect(() => {
    const newFilteredMemes = memes.filter((meme) => {
      return meme.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMemes(newFilteredMemes);
  }, [memes, searchField]);

  const onChangeSearch = (event) => {
    console.log("onChangeSearch");
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Memes Rolodex</h1>
      <SearchBox
        placeholder={"search memes"}
        onChangeHandler={onChangeSearch}
      />
      <CardList memesFiltered={filteredMemes} />
    </div>
  );
};

export default App;
