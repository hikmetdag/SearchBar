import "./SearchResultsList.css";
import { useState} from "react";

const SearchResultsList = ({ results }) => {
  const [selectedItem, setSelectedItem] = useState(-1);

  const handleKeyDown = e => {
    console.log(e.key);
    if (selectedItem < results.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem(prev => prev - 1);
      }
      else if (e.key === "ArrowDown" && selectedItem < results.length - 1) {
        setSelectedItem(prev => prev + 1);
      }

      else if (e.key === "Enter" && selectedItem >= 0) {
        setSelectedItem(prev => prev + 1);
      }
    }
  };

  return (
    <div className="results-list" tabIndex={-1}
      onKeyDown={handleKeyDown}>
      {results.map((result, id, index) => {
        return (<div
          className={selectedItem === index
            ? "search-result active"
            : "search-result"}
          key={id}
        >
          {`${result.first_name} ${result.last_name}`}
        </div>)
          ;
      })}
    </div>
  );
};

export default SearchResultsList;