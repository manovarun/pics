import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Laqxe_Vok2IgdNa7Eiuh2pkZImpQp2o8OhXTI066V14'
  }
});
