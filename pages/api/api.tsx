import axios, { AxiosResponse } from "axios";

type ApiResponse<T> = AxiosResponse<T>;
export async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const response: AxiosResponse<T> = await axios.get(url);
    return response;
  } catch (error) {
    throw new Error(`Error fetching data from ${url}: ${error}`);
  }
}
