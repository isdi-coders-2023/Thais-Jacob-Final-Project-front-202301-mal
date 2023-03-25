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

  return response;
};
