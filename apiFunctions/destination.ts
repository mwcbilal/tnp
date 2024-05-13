"use server";

import axios from "axios";

const HOST_URL = process.env.BASE_URL;

export async function getDesiredAreas(
  extededRoute = "/destinations"
): Promise<any> {
  try {
    const response = await axios.get(HOST_URL + extededRoute);
    return {
      data: response.data,
      status: 200,
      message: "Success",
    };
  } catch (error) {
    console.log("err==>", error);
    return {
      data: [],
      status: 400,
      message: "failed",
    };
  }
}

export async function getDestinationFuelEstimation(destination : string, car: string) {
    const encodedDestination = encodeURIComponent(destination);
  try {
    const response = await axios.get(HOST_URL + `/destinations/cost?name=${encodedDestination}&car=${car}`);
    return {
      data: response.data?.destinationEstimation[0],
      status: 200,
      message: "Success",
    };
  } catch (error) {
    console.log("err==>", error);
    return {
      data: null,
      status: 400,
      message: "failed",
    };
  }
}
