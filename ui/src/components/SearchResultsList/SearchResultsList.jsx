import "./SearchResultsList.css";
import { useNavigate } from "react-router-dom";

const SearchResultsList = ({ results, selectedItem }) => {
  const navigate = useNavigate();
  return (
    <div className="results-list" >
      {results.map((result, index) => {
        return (<div
          tabIndex={-1}
          className={selectedItem === index
            ? "search-result active"
            : "search-result"}
          key={index}
          onClick={() => { navigate(`/user/${result.id.$oid}`); }}
        >
          {`${result.first_name} ${result.last_name} (${result.origin})`}
        </div>);
      })}
    </div>
  );
};

export default SearchResultsList;