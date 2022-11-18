import axios from 'axios';

console.log(process.env.REACT_APP_BASE_API_URL)
console.log(process.env.NODE_ENV)

const api = axios.create({
  headers : {
    'Content-Type': 'application/json',
  },
  // TODO: resolve when sending to production
  baseURL: 'https://4xuzm4m60a.execute-api.us-east-1.amazonaws.com/dev/'
})

export default api;
