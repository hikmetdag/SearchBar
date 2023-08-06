import "./searchResultsList.css";
import { useNavigate } from "react-router-dom";

const SearchResultsList = ({ results, selectedItem }) => {
  const navigate = useNavigate();

  const onClickHandle = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <div className="results-list" >
      {results.map((result, index) => {
        return (
          <div
            //To see where we are when keyboard is used.
            className={selectedItem === index
              ? "search-result active"
              : "search-result"}
            key={index}
            onClick={() => onClickHandle(result.id.$oid)}
          >
            {`${result.first_name} ${result.last_name} (${result.origin})`}
          </div>);
      })}
    </div>
  );
};

export default SearchResultsList;