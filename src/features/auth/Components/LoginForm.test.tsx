import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import LoginForm from './LoginForm';
import { setupServer } from 'msw/node';
import { server } from '../../../mocks/server';
import userEvent from '@testing-library/user-event';

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
  test.skip('When a user tries to login and there is an error it should show message as feedback', async () => {
    render(
      <MemoryRouter initialEntries={['/auth/login']}>
        <Provider store={store}>
          <LoginForm />
        </Provider>
      </MemoryRouter>,
    );

    const email = screen.getByPlaceholderText('Email');
    await userEvent.type(email, 'emailtest.com');
    const password = screen.getByPlaceholderText('Password');
    await userEvent.type(password, 'mySecurePassss');

    const submit = screen.getByRole('button');
    userEvent.click(submit);

    await waitFor(
      () => {
        expect(
          screen.getByText('It looks like your data is not correct...'),
        ).toBeInTheDocument();
      },
      { timeout: 1000 },
    );
  });
});
