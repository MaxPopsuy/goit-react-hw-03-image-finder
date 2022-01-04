import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const key = '25101281-0090f5d9635a12b4d0ee56ce5';

export const apiRequest = (query, page) => {
  return axios.get(`/?image_type=photo&key=${key}&orientation=horizontal&q=${query}&page=${page}&per_page=12`);
};