import Cookies from "js-cookie";

type createCookieType = (
  name: string,
  value: string,
  cookieOptions?: Cookies.CookieAttributes
) => string | undefined;

const useCookies = () => {
  const setCookie: createCookieType = (
    name,
    value,
    cookieOptions = {
      secure: true,
      sameSite: "Strict",
      //httpOnly: true,
      expires: 1,
    }
  ) => {
    return Cookies.set(name, value, cookieOptions);
  };
  const removeCookie = (name: string) => {
    Cookies.remove(name);
  };
  const getCookie = (name: string) => {
    return Cookies.get(name);
  };
  return { setCookie, removeCookie, getCookie };
};

export default useCookies;
