import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import LoginPage from './LoginPage';

describe('Given a home page', () => {
  test('When there is a title, then render it on the page', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>,
    );
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
  });
});
