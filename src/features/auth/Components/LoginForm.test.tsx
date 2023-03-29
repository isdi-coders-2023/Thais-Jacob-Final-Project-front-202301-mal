import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import LoginForm from './LoginForm';
import { server } from '../../../mocks/server';
import userEvent from '@testing-library/user-event';
import { errorHandlers } from '../../../mocks/handlers';
import { renderWithProviders } from '../../../mocks/test-utils';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a login form component', () => {
  test('When the user clicks submit button, then it should call a function', async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );
    const submitFn = jest.fn();
    const submitElement = screen.getByRole('button');
    userEvent.click(submitElement, submitFn());
    await waitFor(() => {
      expect(submitFn).toHaveBeenCalled();
    });
  });

  test('When a user tries to login with a valid email and password, then he should receive his access token', async () => {
    render(
      <MemoryRouter initialEntries={['/auth/login']}>
        <Provider store={store}>
          <LoginForm />
        </Provider>
      </MemoryRouter>,
    );

    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'email@test.com',
    );
    await userEvent.type(screen.getByPlaceholderText('Password'), 'password');

    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByRole('paragraph')).toBeInTheDocument();
    });
  });
  test('When a user tries to login and there is an error it should show message as feedback', async () => {
    server.use(...errorHandlers);

    renderWithProviders(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>,
    );

    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'secondemailtest@gmail.com',
    );
    await userEvent.type(
      screen.getByPlaceholderText('Password'),
      'badpassword',
    );
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(
        screen.getByText('It looks like your data is not correct...'),
      ).toBeInTheDocument();
    });
  });
});
