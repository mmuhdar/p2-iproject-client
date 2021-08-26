import axios from "axios";

const instance = axios.create({
  baseURL: "https://h-nime.herokuapp.com",
});

export default instance;
