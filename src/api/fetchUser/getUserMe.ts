import { getCallWithAuth } from "../coreFunctions/getCall";

export const getUserMe = async () => {
  try {
    const response = await getCallWithAuth(`user/me`);
    return response
  } catch (error) {
    console.error(error);
    throw new Error;
  }
};