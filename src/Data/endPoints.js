import axios from 'axios';


const api = axios.create({
  baseURL: 'https://4xuzm4m60a.execute-api.us-east-1.amazonaws.com/dev/'
})

export default api;

export const AuthHeather = {
  Headers : {
    Authorization: ''
  }
}
