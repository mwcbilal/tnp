"use server";

import axios from "axios";

const HOST_URL = process.env.BASE_URL;

interface PackageDetails {
  TripDetailsAndCostSummary: {
    CostIncludes: string[];
    CostExcludes: string[];
    Itinerary: {
      day: string;
      event: string;
      description: string;
    }[];
    Highlights: string[];
    Images: string[];
  };
}

interface PackageStructure {
  package_id: number;
  package_name: string;
  package_total_persons: number;
  package_description: string;
  package_rate_normal: number;
  package_rate_deluxe: number;
  package_details: string;
  package_duration: number;
  package_isfeatured: boolean;
  package_bestseller: boolean;
  tnp_destinations: {
    destination_id: number;
    destination_category_id: number;
    destination_name: string;
    destination_region_id: number;
    tnp_package_categories: {
      package_category_id: number;
      package_category_name: string;
    };
    tnp_package_regions: {
      region_id: number;
      region_name: string;
    };
  };
  tnp_package_types: {
    package_type_id: number;
    package_type_name: string;
    package_type_value: string;
  };
}

export async function getTourPackagesTypes(
  extededRoute = "/packagetypes",
): Promise<any> {
  try {
    // console.log("API Url", LOCALHOST_URL + extededRoute);
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

export async function getTourPackages(
  limit: number,
  offset: number,
  filters: any,
): Promise<any> {
  try {
    console.log("ARHAAAAAA");
    const response = await axios.get(HOST_URL + `/tourpackages/filter`, {
      params: {
        offset,
        limit,
        ...filters,
      },
    });

    return response.data;
  } catch (error) {
    return {
      data: [],
      status: 400,
      message: "failed",
    };
  }
}

export async function getSinglePackage(
  extededRoute = "/tourpackages/single"
): Promise<{
  data: PackageStructure;
  status: number;
  message: string;
}> {
  try {
    const response = await axios.get(HOST_URL + extededRoute);
    // console.log("API Response", response.data?.data);
    return {
      data: response.data?.data[0],
      message: "success",
      status: 200,
    };
  } catch (error) {
    return {
      data: null,
      status: 400,
      message: "failed",
    };
  }
}

export async function getTourPackagesByCategory(
  extededRoute = "/tourpackages/filter?limit=8&offset=0"
): Promise<{
  data: PackageStructure[];
  status: number;
  message: string;
}> {
  try {
    const response = await axios.get(HOST_URL + extededRoute);
    // console.log("API Response", response.data?.data);
    return {
      data: response.data?.data,
      message: "success",
      status: 200,
    };
  } catch (error) {
    return {
      data: [],
      status: 400,
      message: "failed",
    };
  }
}

export async function getRelatedPackage(
  extededRoute = "/tourpackages/relatedpackages?"
): Promise<{
  data: PackageStructure;
  status: number;
  message: string;
}> {
  try {
    const response = await axios.get(HOST_URL + extededRoute);
    // console.log("API Response", response.data?.data);
    return {
      data: response.data.data,
      message: "success",
      status: 200,
    };
  } catch (error) {
    return {
      data: null,
      status: 400,
      message: "failed",
    };
  }
}
