import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('Given a page error 404', () => {
  test('When is rendered, Then it should show all information of the page', () => {
    render(<NotFound />, { wrapper: MemoryRouter });

    const titleElement = screen.getByText('Oh, that page could not be found.');
    const linkElement = screen.getByRole('link');
    const imageElement = screen.getByAltText(
      'Illustration of a man looking to a 404 error',
    );

    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
