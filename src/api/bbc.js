import axios from 'axios';

export default axios.create({
   baseURL: "https://cors-anywhere.herokuapp.com/http://feeds.bbci.co.uk/news"
});
