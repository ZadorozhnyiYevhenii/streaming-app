import { IUser } from "@/types/IUser";
import { postCallWithAuth } from "@/api";

export const changeUserStreamingInfo = async (
  streamingInfo: Pick<IUser, "ingressId" | "serverUrl" | "streamKey">,
  token: string,
  id: string
) => {
  try {
    const userInfo = await postCallWithAuth(streamingInfo, `/user/update/${id}`, token);

    return userInfo;
  } catch (error) {
    console.error(error);
  }
};
