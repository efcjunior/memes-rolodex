import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder, className } = this.props;

    return (
      <input
        onChange={onChangeHandler}
        placeholder={placeholder}
        className={`search-box ${className}}`}
        type="search"
      />
    );
  }
}

export default SearchBox;
