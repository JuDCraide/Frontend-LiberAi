  
import axios from 'axios'

const api = axios.create({
    baseURL:'https://backend-liberai.herokuapp.com/'
})

export default api;