"use server";

import axios from "axios";

const HOST_URL = process.env.BASE_URL;

export const getAllCars = async () => {
  try {
    const url = HOST_URL + "/car/all?page=1&limit=8";
    const response = await axios.get(url);
    //   console.log("all cars", response);
    return {
      data: response.data,
      status: 200,
      message: "success",
    };
  } catch (error) {
    console.log("Error", error);
    return {
      data: [],
      status: 400,
      message: "failed",
    };
  }
};

export const getCarsBaseOnDestination = async (destination: string) => {
  try {
    const encodedDestination = encodeURIComponent(destination);
    const url = HOST_URL + `/car/ondestination?page=1&destination=${encodedDestination}`;
    const response = await axios.get(url);
    //   console.log("all cars", response);
    return {
      data: response.data,
      status: 200,
      message: "success",
    };
  } catch (error) {
    console.log("Error", error);
    return {
      data: [],
      status: 400,
      message: "failed",
    };
  }
};

export async function fetchCars(quertParams: any) {
  const response = await axios.get(HOST_URL + "/car", {
    params: quertParams,
  });
  return response?.data;
}
