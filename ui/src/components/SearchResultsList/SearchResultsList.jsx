import "./SearchResultsList.css";
import { useNavigate } from "react-router-dom";
const SearchResultsList = ({ results, selectedItem, setEnterKey }) => {
  const navigate = useNavigate();

  return (
    <div className="results-list" >
      {results.map((result, index) => {
        return (<div
          className={selectedItem === index
            ? "search-result active"
            : "search-result"}
          key={index}   onClick={() => { navigate(`/user/${result.id.$oid}`); }}
          onKeyDown={(e) => {
            console.log(e.key)
            if (e.key === "Enter" && selectedItem >= 0) {
              e.preventDefault();
              navigate(`/user/${result.id.$oid}`);
            }
          }
          }
          tabIndex={0}
        >
          {`${result.first_name} ${result.last_name} (${result.origin})`}
        </div>);
      })}
    </div>
  );
};

export default SearchResultsList;