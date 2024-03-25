import { StorageKeys } from "../../utils/storageKeys";
import { BASE_URL } from "../core";

const token = localStorage.getItem(StorageKeys.TOKEN);

export const getCall = async (endpoint: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}

export const getCallWithAuth = async (
  endPoint: string,
) => {
  try {
    const response = await fetch(`${BASE_URL}/${endPoint}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};