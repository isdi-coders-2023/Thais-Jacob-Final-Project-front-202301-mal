import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTourById, getToursList } from './tour-list-api';
import { RootState } from '../../app/store';
import { Tour, TourDetailInterface } from '../../models/tour-model';
import { APIStatus, TourStatus } from '../../models/api-status';
import { createNewTour } from '../create-tour/create-tour-api';

export interface ToursResponse {
  msg: string;
  tours: Tour[];
}

export interface ToursState {
  tours: Tour[];
  tour: TourDetailInterface;
  status: APIStatus;
  responseMsg: string | undefined;
  createStatus: TourStatus;
}

const INITIAL_STATE: ToursState = {
  tours: [],
  tour: {
    _id: '',
    title: '',
    description: '',
    video: '',
    image: '',
    meetingPoint: '',
    price: 0,
    date: '',
  },
  status: APIStatus.IDLE,
  responseMsg: '',
  createStatus: TourStatus.NOT_USED,
};

export interface CreateTourResponse {
  msg: string;
  tour: Tour;
}

export const createTourAsync = createAsyncThunk(
  'tours/createTour',
  async (newTourForm: HTMLFormElement) => {
    const newTour = new FormData(newTourForm);
    const apiResponse = await createNewTour(newTour);

    return {
      msg: 'ok',
      tour: {
        _id: '',
        title: '',
        summary: '',
        image: '',
        meetingPoint: '',
        price: 0,
        date: '',
      },
      apiResponse,
    } as CreateTourResponse;
  },
);

const STATE_NAME = 'cardList';

export const fetchToursAsync = createAsyncThunk(
  `${STATE_NAME}/fetchTours`,
  async () => {
    const apiResponse = await getToursList();
    const data: ToursResponse = await apiResponse.json();
    return data;
  },
);

export const getByIdTourAsync = createAsyncThunk(
  `${STATE_NAME}/getByIdTour`,
  async (id: string) => {
    const data = await getTourById(id);

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

    builder.addCase(createTourAsync.pending, state => {
      state.createStatus = TourStatus.LOADING;
    });
    builder.addCase(
      createTourAsync.fulfilled,
      (state, action: PayloadAction<CreateTourResponse>) => {
        state.createStatus = TourStatus.SUCCESS;
        state.responseMsg = action.payload.msg;
      },
    );
    builder.addCase(createTourAsync.rejected, (state, action) => {
      state.createStatus = TourStatus.ERROR;
      state.responseMsg = action.error.message;
    });

    builder.addCase(getByIdTourAsync.pending, state => {
      state.status = APIStatus.LOADING;
    });
    builder.addCase(getByIdTourAsync.fulfilled, (state, action) => {
      state.status = APIStatus.IDLE;
      state.tour = action.payload as TourDetailInterface;
    });
    builder.addCase(getByIdTourAsync.rejected, (state, action) => {
      state.status = APIStatus.ERROR;
    });
  },
});

export const selectTours = (state: RootState) => state.tours;

export default cardListSlice.reducer;
