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
export async function getCar(id) {
  try {
    const res = await axiosInstance.get(`/details/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addCar(carData) {
  try {
    const res = await axiosInstance.post("/add", carData);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function editCar(carData, id) {
  try {
    const res = await axiosInstance.post(`/edit/${id}`, carData);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
