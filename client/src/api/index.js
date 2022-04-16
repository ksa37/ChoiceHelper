import axios from 'axios';

// const url = 'http://localhost:4000/posts';
const url = 'https://choice-helper-diuni.herokuapp.com/posts';


export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
// export const countPosts = () => axios.get('http://localhost:4000/posts/count')
