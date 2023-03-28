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
  test.skip('When component loads and API responds with error, then it should show loading and after response should render the error message', async () => {
    server.use(...errorHandlers);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <TourCardList />
        </MemoryRouter>
      </Provider>,
    );

    await waitFor(() => {
      const errorImage = screen.getByAltText(
        'Illustration of a man relaxing while looking at nature while waiting',
      );
      expect(errorImage).toBeInTheDocument();
    });

    const errorMessage = await screen.findByText(
      'Oh, it looks like there are no tours here yet...',
    );
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(
      'Oh, it looks like there are no tours here yet...',
    );
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
