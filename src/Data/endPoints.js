import axios from 'axios';

console.log(process.env.REACT_APP_BASE_API_URL)
console.log(process.env.NODE_ENV)
const api = axios.create({
  // TODO: resolve when sending to production
  baseURL: process.env.REACT_APP_BASE_API_URL ? process.env.REACT_APP_BASE_API_URL : 'https://4xuzm4m60a.execute-api.us-east-1.amazonaws.com/dev/'
})

export default api;

export const AuthHeather = {
  Headers : {
    Authorization: ''
  }
}
