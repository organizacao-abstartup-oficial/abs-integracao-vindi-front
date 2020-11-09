import axios from 'axios';


const api = axios.create({
  baseURL: 'https://rx10kvzj0h.execute-api.us-east-1.amazonaws.com/dev/'
})

export default api;

export const AuthHeather = {
  Headers : {
    Authorization: ''
  }
}
