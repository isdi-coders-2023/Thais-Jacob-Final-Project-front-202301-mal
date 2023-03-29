import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import { errorHandlers } from '../../../mocks/handlers';
import { server } from '../../../mocks/server';
import TourCardList from './TourList';

describe('Given a CardList Component,', () => {
  beforeAll(() => server.listen());
  beforeEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('When component loads and API responds with error, then it should show loading and after response should render the error message', async () => {
    server.use(...errorHandlers);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <TourCardList />
        </MemoryRouter>
      </Provider>,
    );

    await waitFor(() => {
      const errorMessage = screen.getByText(
        'Oh, it looks like there are no tours here yet...',
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test('When component loads and API responds with all ads, then it should show loading and after response should render the list', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <TourCardList />
        </MemoryRouter>
      </Provider>,
    );

    await waitFor(() => {
      const items = screen.getAllByRole('listitem');
      expect(items).toHaveLength(2);
    });
  });
});
