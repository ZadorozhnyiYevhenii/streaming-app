import { StorageKeys } from "../../utils/storageKeys";
import { BASE_URL } from "../core";
import { HttpMethod } from "../types";

const token = localStorage.getItem(StorageKeys.TOKEN);

export const putCall = async <T>(
  bodyData: T,
  endPoint: string,
): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}/${endPoint}`, {
      method: HttpMethod.POST,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        bodyData,
      }),
    });

    if (!response.ok) {
      throw new Error();
    }

    const data: T = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}

export const putCallWithAuth = async <T>(
  bodyData: T,
  endPoint: string,
): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}/${endPoint}`, {
      method: HttpMethod.PUT,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        bodyData,
      }),
    });

    if (!response.ok) {
      throw new Error();
    }

    const data: T = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};