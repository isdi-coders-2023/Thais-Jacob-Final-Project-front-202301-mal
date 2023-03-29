import { format } from 'date-fns';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { APIStatus } from '../../../models/api-status';
import { Loading } from '../../../shared/components/Loading/Loading';
import { getByIdTourAsync, selectTours } from '../tour-list-slice';
import {
  AdditionalInfo,
  BackButton,
  BodyInfo,
  DescriptionTour,
  DetailContainer,
  DetailFeedBackError,
  DetailImage,
  DetailImageContainer,
  DetailInfo,
  Divider,
  GeneralInfosContainer,
  InfoTour,
  PaymentInfo,
  TitleInfo,
  TittleAndDescription,
  TittleTour,
  TourTitleContainer,
  VideoAndPaymentContainer,
} from './TourDetailStyled';

interface CardDetailProps {
  tourId: string;
}

const TourDetail: FC<CardDetailProps> = ({ tourId }) => {
  const { tour, status } = useAppSelector(selectTours);

  const videoId = tour.video.split('?v=')[1];

  const dateStr = tour.date;
  const date = new Date(dateStr);
  const formattedDate = format(date, 'MMM do');

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getByIdTourAsync(tourId));
  }, [dispatch, tourId]);

  const detailState = () => {
    switch (status) {
      case APIStatus.LOADING:
        return <Loading />;
      case APIStatus.ERROR:
        return (
          <>
            <DetailFeedBackError data-testid="error-msg">
              {'Oops, it seems it is not possible to see this tour 🙁'}
            </DetailFeedBackError>
          </>
        );
      default:
        return (
          <>
            <DetailContainer>
              <DetailImageContainer>
                <DetailImage src={tour.image} alt={tour.title} />
              </DetailImageContainer>

              <GeneralInfosContainer>
                <TourTitleContainer>{tour.title}</TourTitleContainer>
                <AdditionalInfo>
                  <DetailInfo>
                    <TitleInfo role="paragraph">Date</TitleInfo>
                    <InfoTour role="paragraph">{`${formattedDate}`}</InfoTour>
                  </DetailInfo>
                  <Divider />
                  <DetailInfo>
                    <TitleInfo role="paragraph">Meeting Point</TitleInfo>
                    <InfoTour role="paragraph">{tour.meetingPoint}</InfoTour>
                  </DetailInfo>
                  <Divider />
                  <DetailInfo>
                    <TitleInfo role="paragraph">Price</TitleInfo>
                    <InfoTour role="paragraph">{tour.price}€</InfoTour>
                  </DetailInfo>
                </AdditionalInfo>
              </GeneralInfosContainer>
              <BodyInfo>
                <TittleAndDescription>
                  <TittleTour>{tour.title}</TittleTour>
                  <DescriptionTour role="paragraph">
                    {tour.description}*
                  </DescriptionTour>
                  <BackButton to={'/app'}>Back</BackButton>
                </TittleAndDescription>

                <VideoAndPaymentContainer>
                  <iframe
                    width="309"
                    height="170"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <PaymentInfo role="paragraph">
                    *The amount must be paid on the pot
                  </PaymentInfo>
                </VideoAndPaymentContainer>
              </BodyInfo>
            </DetailContainer>
          </>
        );
    }
  };

  return <> {detailState()}</>;
};

export default TourDetail;
