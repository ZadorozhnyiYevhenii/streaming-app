import { IUser } from "@/types/IUser";
import { postCallWithAuth } from "..";
import { BASE_URL } from "../core";
import { HttpMethod } from "../types";

export const fetchUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/user`, {
      method: HttpMethod.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "User",
        password: "ddadada",
        isLive: false,
        serverUrl: "server",
        streamKey: "dada",
        ingressId: "dadada",
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (user: IUser) => {
  try {
    const newUser = await postCallWithAuth(user, "/user", user.jwt);

    return newUser;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
