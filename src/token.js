import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getToken = () => {
  const token = cookies.get("userId");
  return token ? `${token}` : "";
};

export const setToken = (token) => {
  cookies.set("userId",token,{path:"/"})
};

export const clearToken = () => {
  cookies.remove("userId", { path: '/' })
};
