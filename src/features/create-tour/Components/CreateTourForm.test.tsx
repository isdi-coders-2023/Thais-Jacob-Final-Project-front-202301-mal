import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import { server } from '../../../mocks/server';
import CreateTourForm from './CreateTourForm';

describe('Given a CreatePlan form component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('When the component is rendered, then it should show the form', async () => {
    render(
      <MemoryRouter initialEntries={['/app/create-tour']}>
        <Provider store={store}>
          <CreateTourForm />
        </Provider>
      </MemoryRouter>,
    );

    const inputElements = await screen.findAllByRole('complementary');
    expect(inputElements.length).toEqual(7);
  });

  test('When the user clicks create button, then it should call a function', async () => {
    render(
      <MemoryRouter initialEntries={['/app/create-tour']}>
        <Provider store={store}>
          <CreateTourForm />
        </Provider>
      </MemoryRouter>,
    );
    const createFn = jest.fn();
    const createElement = screen.getByRole('button');
    userEvent.click(createElement, createFn());
    await waitFor(() => {
      expect(createFn).toHaveBeenCalled();
    });
  });

  test('When a user tries to CreatePlan with valid dates, then a tour will be created', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        msg: 'Tour was successfully created 🎉',
      }),
    });
    render(
      <MemoryRouter initialEntries={['/app/create-tour']}>
        <Provider store={store}>
          <CreateTourForm />
        </Provider>
      </MemoryRouter>,
    );

    const formElement = screen.getByTestId('form');
    const titleInput = screen.getByPlaceholderText('Tour title');
    const descriptionInput = screen.getByPlaceholderText('Main description');
    const summaryInput = screen.getByPlaceholderText('Short description');
    const dateInput = screen.getByPlaceholderText('Meeting date');
    const meetingPointInput = screen.getByPlaceholderText('Meeting point');
    const priceInput = screen.getByPlaceholderText(0);
    const videoInput = screen.getByPlaceholderText('YouTube URL');
    const cancelTourButton = screen.getByText('Cancel');
    const createTourButton = screen.getByText('Create tour');

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(descriptionInput, {
      target: { value: 'Test Description' },
    });
    fireEvent.change(summaryInput, { target: { value: 'Test Summary' } });
    fireEvent.change(dateInput, { target: { value: '2023-03-25' } });
    fireEvent.change(meetingPointInput, {
      target: { value: 'Test Meeting Point' },
    });
    fireEvent.change(priceInput, {
      target: { value: '10' },
    });
    fireEvent.change(videoInput, {
      target: { value: 'https://www.youtube.com/watch?v=dU2vUx2kzbI' },
    });
    fireEvent.click(cancelTourButton);
    fireEvent.click(createTourButton);

    expect(formElement).toHaveFormValues({
      title: 'Test Title',
      description: 'Test Description',
      summary: 'Test Summary',
      date: '2023-03-25',
      meetingPoint: 'Test Meeting Point',
      price: '10',
      video: 'https://www.youtube.com/watch?v=dU2vUx2kzbI',
    });

    await waitFor(() => {
      const message = screen.getByRole('paragraph');
      expect(message).toHaveTextContent('Tour was successfully created 🎉');
    });
  });

  test('When a user upload a image, then file input and preview img should change', () => {
    const mockCreateObjectURL = jest.fn();
    global.URL.createObjectURL = mockCreateObjectURL;
    mockCreateObjectURL.mockReturnValue('https://mock-url.com');
    render(
      <MemoryRouter initialEntries={['/app/create-tour']}>
        <Provider store={store}>
          <CreateTourForm />
        </Provider>
      </MemoryRouter>,
    );
    const fileInput = screen.getByTestId('File');
    const imageElement = screen.getByAltText('tour pic');

    const file = new File(['test-image'], 'image/png');
    const event = { target: { files: [file] } };
    fireEvent.change(fileInput, event);

    expect(imageElement).toHaveAttribute('src', 'https://mock-url.com');
  });
  test('When a user does not upload a image, then it shoud show default img', () => {
    const mockCreateObjectURL = jest.fn();
    global.URL.createObjectURL = mockCreateObjectURL;
    mockCreateObjectURL.mockReturnValue('');
    render(
      <MemoryRouter initialEntries={['/app/create-tour']}>
        <Provider store={store}>
          <CreateTourForm />
        </Provider>
      </MemoryRouter>,
    );
    const fileInput = screen.getByTestId('File');
    const imageElement = screen.getByAltText('tour pic');
    const event = { target: { files: [] } };
    fireEvent.change(fileInput, event);

    expect(imageElement).toHaveAttribute(
      'src',
      '/assets/images/default-image-tour.webp',
    );
  });

  test('When a user tries to create a tour with invalid info, then it should show an error', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue({
        msg: 'It was not possible to create the tour 🙁',
      }),
    });
    render(
      <MemoryRouter initialEntries={['/app/create-tour']}>
        <Provider store={store}>
          <CreateTourForm />
        </Provider>
      </MemoryRouter>,
    );
    const formElement = screen.getByTestId('form');
    const titleInput = screen.getByPlaceholderText('Tour title');
    const descriptionInput = screen.getByPlaceholderText('Main description');
    const summaryInput = screen.getByPlaceholderText('Short description');
    const dateInput = screen.getByPlaceholderText('Meeting date');
    const meetingPointInput = screen.getByPlaceholderText('Meeting point');
    const priceInput = screen.getByPlaceholderText(0);
    const videoInput = screen.getByPlaceholderText('YouTube URL');
    const cancelTourButton = screen.getByText('Cancel');
    const createTourButton = screen.getByText('Create tour');

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(descriptionInput, {
      target: { value: 'Test Description' },
    });
    fireEvent.change(summaryInput, { target: { value: 'Test Summary' } });
    fireEvent.change(dateInput, { target: { value: '2023-03-25' } });
    fireEvent.change(meetingPointInput, {
      target: { value: 'Test Meeting Point' },
    });
    fireEvent.change(priceInput, {
      target: { value: '10' },
    });
    fireEvent.change(videoInput, {
      target: { value: 'https://www.youtube.com/watch?v=dU2vUx2kzbI' },
    });
    fireEvent.click(cancelTourButton);
    fireEvent.click(createTourButton);

    expect(formElement).toHaveFormValues({
      title: 'Test Title',
      description: 'Test Description',
      summary: 'Test Summary',
      date: '2023-03-25',
      meetingPoint: 'Test Meeting Point',
      price: '10',
      video: 'https://www.youtube.com/watch?v=dU2vUx2kzbI',
    });

    await waitFor(() => {
      const message = screen.getByRole('paragraph');
      expect(message).toHaveTextContent(
        'It was not possible to create the tour 🙁',
      );
    });
  });
});
