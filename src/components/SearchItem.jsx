import PropTypes from "prop-types";
import { DEFAULT_IMAGE_URL } from "../assets/imageConstants";

const SearchItem = ({ item }) => {
  return (
    <div className="searchResultItem">
      <img
        src={item.image || DEFAULT_IMAGE_URL}
        alt={item.title}
        // show default image on image url loading error
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = DEFAULT_IMAGE_URL;
        }}
      />
      <div className="searchResultDescription">
        <span className="resultTitle">{item.title || ""}</span>
        <span className="resultSubtitle">{item.subtitle || ""}</span>
      </div>
    </div>
  );
};

SearchItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }).isRequired,
};

export default SearchItem;
