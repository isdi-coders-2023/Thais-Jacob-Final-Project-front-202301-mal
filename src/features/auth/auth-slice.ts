import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getTokenByUser } from './auth-api';
import { AuthResponse, UserCredentials } from '../../models/auth-model';

export type AuthStatus = 'idle' | 'success' | 'error';

export interface AuthState {
  status: 'idle' | 'loading' | 'failed';
  loginStatus: AuthStatus;
  loginMsg: string;
}

const initialState: AuthState = {
  status: 'idle',
  loginStatus: 'idle',
  loginMsg: '',
};

export const checkUserTokenAsync = createAsyncThunk(
  'authSlice/getNewUserToken',
  async (form: HTMLFormElement) => {
    const formData = new FormData(form);

    const newUser = Object.fromEntries(formData.entries());
    const apiResponse = await getTokenByUser(newUser as UserCredentials);

    const data: AuthResponse = apiResponse;

    return data;
  },
);

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(checkUserTokenAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        checkUserTokenAsync.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.status = 'idle';
          state.loginStatus = 'success';
          state.loginMsg = action.payload.msg;
          sessionStorage.setItem('Bearer', action.payload.accessToken);
        },
      )
      .addCase(checkUserTokenAsync.rejected, (state, action: any) => {
        state.status = 'failed';
        state.loginStatus = 'error';
        state.loginMsg = action.error.message;
      });
  },
});

export const selectAuthSlice = (state: RootState) => state.auth;

export default authSlice.reducer;
