import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common['Authorization'] = '';
};

export async function signUp(credentials) {
  const { data } = await instance.post('/users/signup', credentials);
  setToken(data.token);
  return data;
}

export const signIn = credentials => {
  const { data } = instance.post('/users/signup', credentials);
  setToken(data.token);
  return data;
};

export const signOut = () => {
  const { data } = instance.post('/users/logout');
  clearToken();
  return data;
};

export const refresh = token => {
  setToken(token);
  const { data } = instance('/users/current');
  return data;
};
