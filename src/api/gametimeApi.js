import axios from "axios";

const getSearch = ({ inputValue }) =>
  axios.get(`https://mobile-staging.gametime.co/v1/search?q=${inputValue}`);

const gametimeApi = { getSearch };
export default gametimeApi;
