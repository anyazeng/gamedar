import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "aea25d8e074b45fe8460ada11d642e8f",
  },
});
