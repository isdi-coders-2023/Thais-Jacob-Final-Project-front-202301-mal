export interface Tour {
  _id: string;
  title: string;
  summary: string;
  image: string;
  meetingPoint: string;
  price: number;
  date: string;
}

export interface TourDetailInterface {
  _id: string;
  title: string;
  description: string;
  video: string;
  image: string;
  meetingPoint: string;
  price: number;
  date: string;
}

export type TourId = Pick<TourDetailInterface, '_id'>;

export type ApiError = {
  msg: string;
};

export type ApiResponse<T> = ApiError | T;
