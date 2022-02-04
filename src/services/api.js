import axios from "axios";

export const key = "6fd2258eba253c056e3a70ec9aeb4d378b627938";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
