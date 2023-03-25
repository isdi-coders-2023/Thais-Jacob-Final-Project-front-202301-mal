import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { TourCard } from './TourCard';
import { fetchToursAsync, selectTours } from '../tour-list-slice';
import { Loading } from '../../../shared/components/Loading/Loading';
import { APIStatus } from '../../../models/api-status';
import {
  ToursCardList,
  FeedBackError,
  FeedBackErrorImage,
  FeedBackErrorText,
} from './TourListSlyled';

const TourCardList = () => {
  const { tours, status } = useAppSelector(selectTours);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchToursAsync());
  }, [dispatch]);

  const generateTourList = () => {
    switch (status) {
      case APIStatus.LOADING:
        return <Loading />;
      case APIStatus.IDLE:
        return (
          <ToursCardList>
            {tours.map(tour => (
              <li key={tour.tittle}>
                <TourCard tour={tour} />
              </li>
            ))}
          </ToursCardList>
        );
      case APIStatus.ERROR:
        return (
          <FeedBackError>
            <FeedBackErrorText>
              Oh, it looks like there are no tours here yet...
            </FeedBackErrorText>
            <FeedBackErrorImage
              src={'../../assets/images/404-list.svg'}
              alt="Illustration of a man relaxing while looking at nature while waiting"
            />
          </FeedBackError>
        );
    }
  };
  return generateTourList();
};

export default TourCardList;
