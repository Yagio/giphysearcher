import axios from 'axios'
import config from '../config'

export default {
  searchGifs(searchTerm, limit = 10) {
    return axios.get(`${config.giphy.baseUrl}/gifs/search`, {
      params: {
        q: searchTerm,
        limit: limit,
        api_key: config.giphy.apiKey
      }
    })
  }
}