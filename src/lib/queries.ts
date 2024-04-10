import {
  CarCredentials,
  CarImageType,
  Cars,
  LoggedUser,
} from '@/utils/typings';
import { Register } from './action';
import { axiosInstance, getToken } from './axios';

//* AUTH
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

//* USERS
export async function getUserDetail(id: string | null | undefined) {
  try {
    await getToken();
    const userData: { data: { user: LoggedUser } } = await axiosInstance.get(
      'user/' + id
    );
    return userData.data.user;
  } catch (error: any) {
    console.log(error.response.data);
    return error.response.data;
  }
}

export async function getUserNotifications(): Promise<
  | {
      id: string;
      notificationClip: string;
    }[]
  | null
> {
  try {
    await getToken();
    const userData = await axiosInstance.get('user/notifications');
    return userData.data.result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// * CARS
export async function fetchCars(): Promise<{ id: string }[]> {
  try {
    const cars = await axiosInstance.get('cars');

    return cars.data.result;
  } catch (error: any) {
    console.log(error.response.data);
    return error.response.data;
  }
}

export async function fetchCarID(id: string): Promise<CarCredentials> {
  try {
    const cars = await axiosInstance.get('cars/' + id);

    return cars.data.result;
  } catch (error: any) {
    console.log(error.response.data);
    return error.response.data;
  }
}

export async function fetchCarImageID(id: string): Promise<CarImageType> {
  try {
    const cars = await axiosInstance.get('cars/images/' + id);

    return cars.data.result;
  } catch (error: any) {
    console.log(error.response.data);
    return error.response.data;
  }
}
