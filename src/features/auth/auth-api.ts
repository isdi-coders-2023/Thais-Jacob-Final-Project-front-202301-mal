import { UserCredentials, AuthResponse } from '../../models/auth-model';

export const getTokenByUser = async (
  user: UserCredentials,
): Promise<AuthResponse> => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error('It looks like your data is not correct...');
  }

  return response.json();
};
