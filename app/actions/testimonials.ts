"use server";
import axios from "axios";
const HOST_URL = process.env.BASE_URL;

export const getTestimonials = async () : Promise<any> => {
  try {
    const response = await axios.get(
      HOST_URL + "/admin/getTestimonials?page=1&limit=4"
    );
    return {
      data: response.data,
      status: 200,
      message: "success",
    };
  } catch (error) {
    console.log("Error in fetching inside testimonials", error)
    return{
        data: null,
        status: 400,
        message: "Failed to fetch data"
    }
  }
};
