import Cookies from "js-cookie";

export const getAccessToken = () => {
  const cookie = Cookies.get("session");
  if (cookie) {
    const token = JSON.parse(cookie);
    return token.accessToken;
  }
  return null;
};

export const getRefreshToken = () => {
  const cookie = Cookies.get("session");
  if (cookie) {
    const token = JSON.parse(cookie);
    return token.refreshToken;
  }
  return null;
};

export const setAccessToken = (accessToken: string) => {
  const cookie = Cookies.get("session");
  if (cookie) {
    const token = JSON.parse(cookie);
    Cookies.set("session", JSON.stringify({ ...token, accessToken }));
  }
};

export const setCookies = (session: {
  accessToken: string;
  refreshToken: string;
}) => {
  const tokens = JSON.stringify(session);
  Cookies.set("session", tokens, {
    expires: 7,
  });
};

export const removeCookies = () => {
  Cookies.remove("session");
};

export const removeAccessToken = () => {
  const cookie = Cookies.get("session");
  if (cookie) {
    const token = JSON.parse(cookie);
    Cookies.set("session", JSON.stringify({ ...token, accessToken: null }));
  }
};

export const removeRefreshToken = () => {
  Cookies.remove("session");
};
