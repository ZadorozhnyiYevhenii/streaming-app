import { IUser } from "@/types/IUser";
import { getCall } from "@/api";

export const getUser = async (id: string): Promise<IUser> => {
  try {
    const response = await getCall(id);

    return response;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
