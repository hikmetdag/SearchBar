import { useState } from "react";
import "./App.css";
import SearchBar from "./components/Searchbar/SearchBar";
import SearchResultsList from "./components/SearchResultsList/SearchResultsList";

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} results={results} />
        {results && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default App;
