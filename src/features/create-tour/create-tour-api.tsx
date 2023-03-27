export const createNewTour = async (newTour: FormData) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/tours/create`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
      body: newTour,
    },
  );
  if (!response.ok) {
    throw new Error('Unable to create the tour');
  }
  return response;
};
