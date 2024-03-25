import { IUser } from "@/types/IUser";
import { getCallWithAuth } from "../coreFunctions/getCall";
import { StorageKeys } from "../../utils/storageKeys";

const userId = localStorage.getItem(StorageKeys.USERID);

export const getUserById = async (): Promise<IUser> => {
  try {
    const user: IUser = await getCallWithAuth(`user/${userId}`);

    return user;
  } catch (error) {
    console.error(error);
    throw new Error;
  }
};
