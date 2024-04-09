export type UserAuth = {
  name?: string | null;
  email?: string | null;
  sub?: string | null;
  accessToken?: string | null;
  role?: string | null;
  iat?: number | null;
  exp?: number | null;
  jti?: string | null;
};

export type UserData = {
  user: UserAuth;
  expires: string;
};

export type LoggedUser = {
  id: string;
  email: string;
  name: string;
  role: string;
  profileImg: string;
  billingId: null;
};

export type CarsID = {
  result: { id: string }[];
};

export type Cars = {
  data: CarsID;
  status: number;
  statusText: string;
};

export interface CarCredentials {
  id: string;
  name: string;
  carType: string;
  steering: string;
  capacity: string;
  gasoline: string;
  amount: string;
  description: string;
  rented: boolean;
  tag: string;
  tagDescription: string;
  region: string;
  state: string;
  ownerId: string;
  carImageId: string;
  carImage: {
    id: string;
  };
}

export type CarImageType = {
  url: string;
  public_id: string;
}[];
