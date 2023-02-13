import axios from "axios";

//here consuming API from backend
export const getDataAPI = async (url, page) => {
    const res = await axios.get(`/api/${url}?page=${page}`);
    return res;
  };

  export const postDataAPI = async (url, post, token) => {
    const res = await axios.post(`/api/${url}`, post, {
      headers: { Authorization: token },
    });
    return res;
  };