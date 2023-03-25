import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getToursList } from './tour-list-api';
import { RootState } from '../../app/store';
import { Tour } from '../../models/tour-model';
import { APIStatus } from '../../models/api-status';

const STATE_NAME = 'cardList';

export interface ToursResponse {
  msg: string;
  tours: Tour[];
}

export interface ToursState {
  tours: Tour[];
  status: APIStatus;
  responseMsg: string | undefined;
}

const INITIAL_STATE: ToursState = {
  tours: [],
  status: APIStatus.IDLE,
  responseMsg: '',
};

export const fetchToursAsync = createAsyncThunk(
  `${STATE_NAME}/fetchTours`,
  async () => {
    const apiResponse = await getToursList();
    const data: ToursResponse = await apiResponse.json();
    if (!apiResponse.ok) {
      throw new Error(`${data.msg}`);
    }
    return data;
  },
);

export const cardListSlice = createSlice({
  name: STATE_NAME,
  initialState: INITIAL_STATE,

  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchToursAsync.pending, state => {
      state.status = APIStatus.LOADING;
    });

    builder.addCase(
      fetchToursAsync.fulfilled,
      (state, action: PayloadAction<ToursResponse>) => {
        state.status = APIStatus.IDLE;
        state.tours = action.payload.tours;
        state.responseMsg = action.payload.msg;
      },
    );

    builder.addCase(fetchToursAsync.rejected, (state, action) => {
      state.status = APIStatus.ERROR;
      state.responseMsg = action.error.message;
    });
  },
});

export const selectTours = (state: RootState) => state.tours;

export default cardListSlice.reducer;
