import { rest } from 'msw';
import { toursFullFilledResponse } from './tours-mocks';

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}/auth/login`,
    async (req, res, ctx) => {
      const request = await req.json();
      const { email } = request;

      if (email === 'email@test.com') {
        return res(
          ctx.status(201),
          ctx.json({
            msg: 'Successfully logged in! You will now be redirected...',
          }),
        );
      }

      return res(
        ctx.status(404),
        ctx.json({ msg: 'It looks like your data is not correct.' }),
      );
    },
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/tours`,
    async (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(toursFullFilledResponse));
    },
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/tours/goodId`,
    (_req, res, ctx) => {
      const mockDate = '2022-04-01T00:00:00.000Z';
      return res(
        ctx.status(200),
        ctx.json({
          _id: 'goodId',
          title: 'tittle test',
          description: 'description test',
          image: 'image test',
          meetingPoint: 'local test',
          price: 5,
          date: new Date(mockDate),
          video: 'video test',
        }),
      );
    },
  ),
];

export const errorHandlers = [
  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/tours`,
    (_req, res, ctx) => {
      return res.once(ctx.status(500), ctx.json(null));
    },
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/tours/badId`,
    (_req, res, ctx) => {
      return res.once(
        ctx.status(404),
        ctx.json({
          msg: 'Oops, it seems it is not possible to see this tour 🙁',
        }),
      );
    },
  ),
];
