import { screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { errorHandlers } from '../../../mocks/handlers';
import { server } from '../../../mocks/server';
import { renderWithProviders } from '../../../mocks/test-utils';
import TourDetail from './TourDetail';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('Given a CardDetail component', () => {
  describe('When the id is correct', () => {
    test('Then it should show the card description', async () => {
      const goodId = 'goodId';

      renderWithProviders(
        <MemoryRouter>
          <TourDetail tourId={goodId} />
        </MemoryRouter>,
      );

      const titles = await screen.findAllByText('tittle test');
      titles.map(title => expect(title).toBeInTheDocument());

      const meetingPoint = await screen.findByText('local test');
      await expect(meetingPoint).toBeInTheDocument();

      const price = await screen.findByText('5€');
      await expect(price).toBeInTheDocument();

      const iframeElement = screen.getByTitle('YouTube video player');
      expect(iframeElement).toBeInTheDocument();
    });
    describe('When the id is invalid', () => {
      test('Then its should show an error message', async () => {
        server.use(...errorHandlers);
        const invalidId = 'badId';
        renderWithProviders(
          <MemoryRouter>
            <TourDetail tourId={invalidId} />
          </MemoryRouter>,
        );

        await waitFor(() => {
          const error = screen.getByTestId('error-msg');
          expect(error).toBeInTheDocument();
        });
      });
    });
  });
});
