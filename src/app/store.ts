import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth-slice';
import toursReducer from '../features/tour/tour-list-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tours: toursReducer,
  },
});

const rootReducer = combineReducers({
  auth: authReducer,
  tours: toursReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
