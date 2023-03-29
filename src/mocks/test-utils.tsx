import { PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from '../app/store';
import { APIStatus, TourStatus } from '../models/api-status';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {
      auth: {
        status: 'idle',
        loginStatus: 'idle',
        loginMsg: '',
      },
      tours: {
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
      },
    },

    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
