import axios from "axios";

const Main_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = () => axios.get(`${Main_URL}/posts`);
export const createPost = (data) => axios.post(`${Main_URL}/posts`, data);

export const updatePost = (id, data) =>
  axios.put(`${Main_URL}/posts/${id}`, data);
export const deletePost = (id) => axios.delete(`${Main_URL}/posts/${id}`);
