import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const localInstance = axios.create({
  baseURL: "http://localhost:8000",
});

export default instance;
