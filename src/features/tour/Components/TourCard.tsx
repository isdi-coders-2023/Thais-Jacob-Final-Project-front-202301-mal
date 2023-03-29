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
  TourCardDescription,
  TourCardTittle,
  TouCardPrice,
  TourCardIcon,
  TourCardMeetingPoint,
} from './TourCardStyled';

interface CardProps {
  tour: Tour;
}

export const TourCard: FC<CardProps> = ({ tour }) => {
  const { _id } = tour;

  const date = new Date(tour.date);
  const dateString = date.toLocaleString('en', {
    month: 'short',
    day: '2-digit',
  });

  return (
    <TourCardContainer>
      <>
        <TourCardImage src={tour.image} alt={`tour-picture`}></TourCardImage>

        <TourCardInfo>
          <TourCardMainInfo>
            <TourCardTittle>{tour.title}</TourCardTittle>
            <TourCardDescription>{tour.summary}</TourCardDescription>
          </TourCardMainInfo>

          <TourCardExtraInfo>
            <TourCardLocal>
              <TourCardIcon />
              <TourCardMeetingPoint>{tour.meetingPoint}</TourCardMeetingPoint>
            </TourCardLocal>

            <TourCardDate>{`${dateString}`}</TourCardDate>
          </TourCardExtraInfo>

          <TourCardButtonAndPrice>
            <TourCardButton to={`detail/${_id}`}>View tour</TourCardButton>

            <TouCardPrice>{tour.price}€</TouCardPrice>
          </TourCardButtonAndPrice>
        </TourCardInfo>
      </>
    </TourCardContainer>
  );
};
