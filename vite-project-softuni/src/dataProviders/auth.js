import axios from "axios";
const apiUrl = "http://localhost:5000";
export async function registerUser(userData) {
  try {
    const res = await axios.post(`${apiUrl}/users/register`, userData);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
