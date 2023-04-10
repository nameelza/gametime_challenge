import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import gametimeLogo from "../assets/gametimeLogo.png";
import SearchItem from "./SearchItem";
import useSearch from "../hooks/useSearch";

const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");

  const { searchResults, isError, showNoResults } = useSearch({ inputValue });

  return (
    <div className="searchPage">
      <img src={gametimeLogo} className="logo" alt="Gametime Logo" />
      <div className="searchBox">
        <div className="searchBar">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="Search event, artist or venue"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div
          className="searchResultBox"
          style={{
            visibility: inputValue.length > 0 ? "visible" : "hidden",
          }}
        >
          {isError ? (
            <span className="errorMessage">Something went wrong</span>
          ) : showNoResults ? (
            <span className="errorMessage">No results found</span>
          ) : (
            searchResults.map((item) => {
              return <SearchItem key={item.id} item={item} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
