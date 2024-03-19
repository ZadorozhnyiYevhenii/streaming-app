import { IUser } from "@/types/IUser"
import { HttpMethod } from "../types"

export const loginUser = async ({
  username,
  password
}: Pick<IUser, "username" | "password">) => {
  try {
    const loginReponse = await fetch('http://localhost:8080/auth/authenticate',
    {
      method: HttpMethod.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });

    if (!loginReponse.ok) {
      throw new Error("Failed to login");
    }

    const token = await loginReponse.text();

    return token
  } catch (error) {
    console.error(error)
    throw new Error;
  }
}