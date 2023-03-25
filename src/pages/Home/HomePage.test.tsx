import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import HomePage from './HomePage';

describe('Given a home page', () => {
  test('When there is a title, then render it on the page', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    const title = screen.getByRole('heading', {
      level: 1,
      name: /Explore the heart of Andalusia and unlock the secrets of Málaga/i,
    });
    expect(title).toBeInTheDocument();
  });
});
