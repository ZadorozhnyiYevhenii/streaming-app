import Cookies from "js-cookie";

export const getCookie = (name: string) => {
  const authToken = Cookies.get(name);

  return authToken;
};
