import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../../mocks/test-utils';
import DetailPage from './DetailPage';

describe('Given a detail page', () => {
  test('When there is a title, then render it on the page', () => {
    renderWithProviders(
      <MemoryRouter>
        <DetailPage />
      </MemoryRouter>,
    );
    const loading = screen.getByAltText('Waiting for data loading');
    expect(loading).toBeInTheDocument();
  });
});
