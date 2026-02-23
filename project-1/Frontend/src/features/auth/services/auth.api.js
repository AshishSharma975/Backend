import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

async function register(username, email, password) {
  try {
    const response = await api.post("/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function login(username, password) {
  try {
    const response = await api.post("/login", {
      username,   
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { register, login };