import axios from "axios";

const BASE_URL = 'https://gateway.marvel.com/v1/public'

const MarvelAPi = axios.create({
    baseURL:BASE_URL
})

export default MarvelAPi