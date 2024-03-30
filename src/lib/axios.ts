import { getServerSideSession } from '@/utils/session';
import { LoggedUser } from '@/utils/typings';
import axios from 'axios';
import { Register } from './action';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:9000/api/',
});

const setAuthorizationHeader = (token: string | null | undefined) => {
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};
//* GET USER TOKEN FROM THE SESSION
export const getToken = async () => {
  const userToken = await getServerSideSession();
  setAuthorizationHeader(userToken?.accessToken);
};
