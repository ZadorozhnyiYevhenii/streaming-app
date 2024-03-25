import Cookies from "js-cookie";

export const setCookie = (name: string, item: string) => {
  Cookies.set(name, item);
};
