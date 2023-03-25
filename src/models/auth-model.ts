export interface User {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  id: string;
  msg: string;
  accessToken: string;
}

export type UserCredentials = Pick<User, 'email' | 'password'>;
