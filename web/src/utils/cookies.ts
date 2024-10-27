import Cookies from "js-cookie";

export function setCookie(
  key: string,
  value: { [key: string]: string | number }
) {
  Cookies.set(key, JSON.stringify(value), { expires: 0.5 });
}

export function getCookie(key: string) {
  const value = Cookies.get(key);

  return value ? JSON.parse(value) : null;
}

export function removeCookie(key: string) {
  Cookies.remove(key);
}
