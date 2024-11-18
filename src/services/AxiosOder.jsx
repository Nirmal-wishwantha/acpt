import axios from "axios";

// const token = localStorage.getItem('login');

const instance = axios.create({
    baseURL: 'https://student-api.acpt.lk/api',
    timeout: 2000,
    // headers: {Authorization: `Bearer ${token}`}
  });
  export default instance;