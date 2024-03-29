import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import { Tour } from '../../../models/tour-model';
import { TourCard } from './TourCard';

describe('When a Card component is rendered', () => {
  const tour: Tour = {
    _id: 'id test',
    title: 'tittle test',
    summary: 'summary test',
    image: '',
    meetingPoint: 'local test',
    price: 5,
    date: '2022-04-01T00:00:00.000Z',
  };

  test('Then it should show an ad card', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <TourCard tour={tour} />
        </Provider>
        ,
      </MemoryRouter>,
    );

    const tittleElement = screen.getByText(tour.title);
    expect(tittleElement).toBeInTheDocument();

    const summaryElement = screen.getByText(tour.summary);
    expect(summaryElement).toBeInTheDocument();

    const meetingPointElement = screen.getByText(tour.meetingPoint);
    expect(meetingPointElement).toBeInTheDocument();

    const priceElement = screen.getByText(`${tour.price}€`);
    expect(priceElement).toBeInTheDocument();

    const imgElement = await screen.findByAltText('tour-picture');
    expect(imgElement).toBeInTheDocument();

    expect(tour.date).toEqual('2022-04-01T00:00:00.000Z');
  });
});
