import { BASE_URL } from "../chore";

export const fetchUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "User",
        password: "ddadada",
        isLive: false,
        serverUrl: "server",
        streamKey: "dada",
        ingressId: "dadada",
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
