import { ApiResponse, TourDetailInterface } from '../../models/tour-model';

export const getToursList = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/tours`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    },
  );
  if (!response.ok) {
    throw new Error('It looks like your data is not correct...');
  }

  return response;
};

export const getTourById = async (
  id: string,
): Promise<ApiResponse<TourDetailInterface>> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/tours/${id}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    },
  );
  const tourResponse: ApiResponse<TourDetailInterface> = await response.json();

  if (!response.ok) {
    throw new Error('Oops, it seems it is not possible to see this tour 🙁');
  }

  return tourResponse as TourDetailInterface;
};
