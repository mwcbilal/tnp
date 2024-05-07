import axios from 'axios'

export async function fetchCars(quertParams : any) {
  const response = await axios.get("/pages/api/car",{
      params: quertParams
  });
  return response?.data
}
