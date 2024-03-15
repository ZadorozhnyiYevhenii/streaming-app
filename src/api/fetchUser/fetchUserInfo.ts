import { IUser } from "@/types/IUser";
import { BASE_URL } from "../chore";

export const fetchUserInfo = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/user/fbd645b0-f22b-421b-ab75-5623632cb2e9`,
      { cache: "no-store" }
    );
    const data: IUser = await response.json();
    console.log("user data", data);

    return data
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
