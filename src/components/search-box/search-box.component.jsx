import "./search-box.styles.css";

const SearchBox = ({ onChangeHandler, placeholder, className }) => (
  <input
    onChange={onChangeHandler}
    placeholder={placeholder}
    className={`search-box ${className}}`}
    type="search"
  />
);

export default SearchBox;
