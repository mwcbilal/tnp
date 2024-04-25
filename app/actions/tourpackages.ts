'use server';

import axios from "axios";

const LOCALHOST_URL = "http://localhost:3000/pages/api";


export async function getTourPackages(extededRoute = "/tourpackages/all"): Promise<any> {
    try {
        const response = await axios.get(LOCALHOST_URL + extededRoute);
        // console.log("API Response", response.data?.data);
        return response.data;
    } catch (error) {
        return {
            data: [],
            status: 400,
            message: "failed"
        }
    }
}

export async function getSinglePackage(extededRoute = "/tourpackages/single"): Promise<any> {
    try {
        const response = await axios.get(LOCALHOST_URL + extededRoute);
        // console.log("API Response", response.data?.data);
        return response.data?.data[0];
    } catch (error) {
        return {
            data: [],
            status: 400,
            message: "failed"
        }
    }
}