import axios from 'axios'

const endpoint = 'http://localhost:3333'

const api = axios.create({
  baseURL: endpoint,
})

export default api
