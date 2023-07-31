import { useState } from "react";
import "./home.css";
import SearchResultsList from "../../components/SearchResultsList/SearchResultsList";
import SearchBar from "../../components/Searchbar/SearchBar";
import { useNavigate } from "react-router-dom";

function Home() {
    const [results, setResults] = useState([]);
    const [selectedItem, setSelectedItem] = useState(-1);
    const navigate = useNavigate();
    const handleKeyDown = e => {
        //When arrowup-key is pressed selection moves up
        if (e.key === "ArrowUp" && selectedItem > 0) {
            setSelectedItem(prev => prev - 1);
        }
        //When arrowdown-key is pressed selection moves down
        else if (e.key === "ArrowDown" && selectedItem < results.length - 1) {
            setSelectedItem(prev => prev + 1);
        }
        //When enter-key is pressed, navigation function will be triggered.
        else if (e.key === "Enter" && selectedItem > -1) {

            navigate(`/user/${results[selectedItem].id.$oid}`);
        }
    };
    return (
        <div className="Home">
            <div className="search-bar-container" tabIndex={-1} onKeyDown={handleKeyDown}>
                <SearchBar setResults={setResults} results={results} />
                <SearchResultsList results={results} selectedItem={selectedItem} />
            </div>
        </div>
    );
}

export default Home;