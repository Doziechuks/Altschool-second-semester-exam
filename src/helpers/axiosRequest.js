import axios from "axios";

const baseURL = "https://api.github.com/";
const token = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN;

export const axiosRequest = axios.create({
  baseURL,
  headers: {
    Authorization: `token ${token}`,
  },
});
