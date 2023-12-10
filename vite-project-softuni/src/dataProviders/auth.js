import axiosInstance from "../configs/axios";

export async function loginUser(userData, type) {
  try {
    const res = await axiosInstance.post(`/users/${type}`, userData);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function logoutUser() {
  try {
    const res = await axiosInstance.get("/users/logout");
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProfile() {
  try {
    const id = JSON.parse(localStorage.getItem("user-profile")).id;
    const res = await axiosInstance.get(`/users/profile/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
