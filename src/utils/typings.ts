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
