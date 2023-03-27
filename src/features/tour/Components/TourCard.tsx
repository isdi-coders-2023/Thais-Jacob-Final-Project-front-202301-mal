import { FC } from 'react';
import { format } from 'date-fns';
import { Tour } from '../../../models/tour-model';
import {
  TourCardButtonAndPrice,
  TourCardButton,
  TourCardContainer,
  TourCardDate,
  TourCardExtraInfo,
  TourCardImage,
  TourCardInfo,
  TourCardLocal,
  TourCardMainInfo,
  TourCardSummary,
  TourCardTittle,
  TouCardPrice,
  TourCardIcon,
  TourCardMeetingPoint,
} from './TourCardStyled';

interface CardProps {
  tour: Tour;
}

export const TourCard: FC<CardProps> = ({ tour }) => {
  const dateStr = tour.date;
  const date = new Date(dateStr);
  const formattedDate = format(date, 'MMM do');

  return (
    <TourCardContainer>
      <>
        <TourCardImage src={tour.image} alt={`tour-picture`}></TourCardImage>

        <TourCardInfo>
          <TourCardMainInfo>
            <TourCardTittle>{tour.title}</TourCardTittle>
            <TourCardSummary>{tour.summary}</TourCardSummary>
          </TourCardMainInfo>

          <TourCardExtraInfo>
            <TourCardLocal>
              <TourCardIcon />
              <TourCardMeetingPoint>{tour.meetingPoint}</TourCardMeetingPoint>
            </TourCardLocal>

            <TourCardDate>{`${formattedDate}`}</TourCardDate>
          </TourCardExtraInfo>

          <TourCardButtonAndPrice>
            <TourCardButton>View tour</TourCardButton>

            <TouCardPrice>{tour.price}€</TouCardPrice>
          </TourCardButtonAndPrice>
        </TourCardInfo>
      </>
    </TourCardContainer>
  );
};
