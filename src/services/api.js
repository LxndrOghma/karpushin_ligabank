import axios from 'axios';

const BASE_URL = 'http://api.currencylayer.com/';
const REQUEST_TIMEOUT = 5000;

export const createApi = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSucces = (response) => response;

  const onFail = (err) => {
    throw (err);
  };

  api.interceptors.response.use(onSucces, onFail);

  return api;
};
