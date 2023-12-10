import axiosInstance from "../configs/axios";

export async function getCars(type) {
  try {
    const res = await axiosInstance.get(`/${type}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
