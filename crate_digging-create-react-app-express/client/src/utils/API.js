import axios from "axios";

const BASEURL = "http://api.discogs.com/user/CrateDiggingPHL/collection/search?q=";
const APIKEY = process.env.DISCOGS_CONSUMER_KEY;
const APISECRET = process.env.DISCOGS_CONSUMER_SECRET;

// Export an object with a "search" method that searches the DISCOGS API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY + APISECRET);
  }
};

