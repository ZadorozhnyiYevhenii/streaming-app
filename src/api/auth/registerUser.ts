import { IUser } from "@/types/IUser";
import { BASE_URL } from "../core";

export const registerUser = async ({
  username,
  email,
  password,
}: Pick<IUser, "email" | "password" | "username">) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to register user");
    }

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error(error);
    throw new Error;
  }
};
