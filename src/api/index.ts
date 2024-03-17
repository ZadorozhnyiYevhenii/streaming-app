import { BASE_URL } from "./core";
import { HttpMethod } from "./types";

export const getCall = async (endPoint: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${endPoint}`);

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

export const getCallWithAuth = async (
  endPoint: string,
  token: string
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

export const postCallWithAuth = async <T>(
  bodyData: T,
  endPoint: string,
  token: string
): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}/${endPoint}`, {
      method: HttpMethod.POST,
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

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
