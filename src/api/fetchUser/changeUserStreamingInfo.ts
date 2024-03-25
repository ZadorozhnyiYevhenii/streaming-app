import { IUser } from "@/types/IUser";
import { postCallWithAuth } from "../coreFunctions/postCall";
import { StorageKeys } from "../../utils/storageKeys";

const userId = localStorage.getItem(StorageKeys.USERID);

export const changeUserStreamingInfo = async (
  streamingInfo: Pick<IUser, "ingressId" | "serverUrl" | "streamKey">,
) => {
  try {
    const userInfo = await postCallWithAuth(streamingInfo, `/user/${userId}`);

    return userInfo;
  } catch (error) {
    console.error(error);
  }
};
