import { useState, useEffect } from "react";
import formatSearchData from "../utils/searchUtils";
import gametimeApi from "../api/gametimeApi";

const useSearch = ({ inputValue }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isError, setIsError] = useState(false);
  const [showNoResults, setShowNoResults] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setShowNoResults(false)
      if (inputValue.length > 0) {
        try {
          const response = await gametimeApi.getSearch({ inputValue });
          const formattedResults = formatSearchData(response.data);
          if (formattedResults.length === 0) {
            setTimeout(() => setShowNoResults(true), 400);
          }
          setSearchResults(formattedResults);
        } catch (err) {
          setIsError(true);
          console.error(`Something went wrong -- ${err}`);
        }
      } else {
        setSearchResults([]);
      }
    };
    fetchData();
  }, [inputValue]);

  return { searchResults, isError, showNoResults };
};

export default useSearch;
