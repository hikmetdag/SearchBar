import { useState } from "react";
import "./home.css";
import SearchResultsList from "../../components/SearchResultsList/SearchResultsList";
import SearchBar from "../../components/Searchbar/SearchBar";

function Home() {
    const [results, setResults] = useState([]);
    const [selectedItem, setSelectedItem] = useState(-1);

    const handleKeyDown = e => {
        if (selectedItem < results.length) {
            if (e.key === "ArrowUp" && selectedItem > 0) {
                setSelectedItem(prev => prev - 1);
            }
            else if (e.key === "ArrowDown" && selectedItem < results.length - 1) {
                setSelectedItem(prev => prev + 1);
            }

        }
    };
    return (
        <div className="Home">
            <div className="search-bar-container" tabIndex={-1}
                onKeyDown={handleKeyDown}>
                <SearchBar setResults={setResults} results={results} />
                {results && <SearchResultsList results={results} selectedItem={selectedItem
                } />}
            </div>
        </div>
    );
}

export default Home;