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

export async function deleteCar(id) {
  try {
    const res = await axiosInstance.get(`/delete/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function likeCar(id) {
  try {
    const res = await axiosInstance.get(`/vote-up/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function dislikeCar(id) {
  try {
    const res = await axiosInstance.get(`/vote-down/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function favoriteCar(id) {
  try {
    const res = await axiosInstance.get(`/favorite/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function comment(id, comment) {
  console.log(comment);
  try {
    const res = await axiosInstance.post(`/comment/${id}`, comment);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
