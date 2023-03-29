import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { server } from '../../mocks/server';
import { renderWithProviders } from '../../mocks/test-utils';
import DetailPage from './DetailPage';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a detail page', () => {
  test('When it is loading, then render a loading gif on the page', () => {
    renderWithProviders(
      <MemoryRouter>
        <DetailPage />
      </MemoryRouter>,
    );
    const loading = screen.getByAltText('Waiting for data loading');
    expect(loading).toBeInTheDocument();
  });

  test('When tour details are selected, this is rendered on the page.', () => {
    renderWithProviders(
      <MemoryRouter>
        <DetailPage />
      </MemoryRouter>,
    );
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});
