import { IUser } from "@/types/IUser";
import { BASE_URL } from "../chore";

export const changeUserStreamingInfo = async ({ ingressId, serverUrl, streamKey}: Pick<IUser, 'ingressId' | 'serverUrl' | 'streamKey'>) => {
  try {
    const response = await fetch(`${BASE_URL}/user/update/fbd645b0-f22b-421b-ab75-5623632cb2e9`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        serverUrl: serverUrl,
        ingressId: ingressId,
        streamKey: streamKey
      }),
      cache: 'no-store'
    })

    if (!response.ok) {
      throw new Error
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error)
    throw new Error
  }
}