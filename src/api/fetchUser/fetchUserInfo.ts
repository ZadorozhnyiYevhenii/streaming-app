import { IUser } from "@/types/IUser";
import { getCall } from "../coreFunctions/getCall";
import { StorageKeys } from "../../utils/storageKeys";

const userId = localStorage.getItem(StorageKeys.USERID) as string;

export const getUser = async (): Promise<IUser> => {
  try {
    const response = await getCall(userId);

    return response;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
