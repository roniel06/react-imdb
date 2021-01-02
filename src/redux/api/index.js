import axios from 'axios'

const baseUrl= "https://www.omdbapi.com/?apikey=b54813fe";

export const apiCall = (url, data, headers, method)=> axios({
    method,
    url:baseUrl + url,
    data,
    headers
})