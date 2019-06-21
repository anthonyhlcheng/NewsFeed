import axios from 'axios';

export default axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/http://www.independent.co.uk"
});
