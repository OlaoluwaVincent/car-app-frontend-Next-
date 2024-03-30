import { LoggedUser } from '@/utils/typings';
import { Register } from './action';
import { axiosInstance, getToken } from './axios';

export async function registerUser(data: Register) {
  try {
    const response = await axiosInstance.post('auth/register', data);
    if (response.status == 201) {
      const user: LoggedUser = {
        ...response.data,
      };
      return user;
    }
    return null;
  } catch (error: any) {
    console.log(error);

    return error.response.data;
  }
}

export async function getUserDetail(id: string | null | undefined) {
  try {
    await getToken();
    const userData: { data: { user: LoggedUser } } = await axiosInstance.get(
      'user/' + id
    );
    return userData.data.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUserNotification(id: string | null | undefined) {
  if (typeof id !== 'string') {
    throw new Error('Please Provide ID');
  }
  try {
    await getToken();
    const userData: { data: { user: LoggedUser } } = await axiosInstance.get(
      'user/' + id
    );
    return userData.data.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
