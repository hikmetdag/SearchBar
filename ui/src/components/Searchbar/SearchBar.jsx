import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import useFetch from "../../hook/useFetch";
import "./SearchBar.css";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const { data } = useFetch(`http://localhost:5000?q=${input}`);

  //We put data we received from backend into results.
  useEffect(() => {
    setResults(data);
  }, [data]);

  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <div className="input-wrapper" >
      <FaSearch id="search-icon" />
      <input
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;