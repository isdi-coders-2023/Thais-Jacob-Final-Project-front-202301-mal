import styled from 'styled-components';
import { Location } from '@styled-icons/evil/Location';
import { Link } from 'react-router-dom';

export const TourCardContainer = styled.article`
  width: 337px;
  height: 395px;
  background: #ffffff;
  border-radius: var(--border-m);
  transition: 0.2s ease-in-out;
  box-shadow: var(--box-shadow-card);
  border: var(--border-color-card);
  @media (min-width: 1024px) {
    height: 486px;
  }
`;

export const TourCardImage = styled.img`
  border-radius: 16px 16px 0px 0px;
  width: 100%;
  height: 200px;
  background: linear-gradient(#e66465, #9198e5);
  display: flex;
  align-items: top;
  justify-content: right;
`;

export const TourCardInfo = styled.div``;

export const TourCardMainInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TourCardTittle = styled.h5`
  font-family: var(--font-family-dmsans-bold);
  font-size: var(--font-size-m);
  color: var(--color-font-secondary);
  font-weight: var(--font-weight-bold);
  width: 100%;
  padding-top: 24px;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 8px;
`;

export const TourCardSummary = styled.p`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    font-family: var(--font-family-dmsans-regular);
    font-size: var(--font-size-xs);
    color: var(--color-font-paragraph);
    font-weight: var(--font-weight-regular);
    line-height: 24px;
    width: 100%;
    padding-right: 24px;
    padding-left: 24px;
    padding-bottom: 24px;
  }
`;

export const TourCardExtraInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const TourCardMeetingPoint = styled.p`
  font-family: var(--font-family-dmsans-regular);
  font-size: var(--font-size-xs);
  color: var(--color-font-paragraph-light);
  font-weight: var(--font-weight-regular);
  padding-left: 3px;
`;

export const TourCardLocal = styled.div`
  display: flex;
  align-items: center;
`;

export const TourCardIcon = styled(Location)`
  color: var(--color-font-paragraph-light);
  width: 24px;
`;

export const TourCardDate = styled.p`
  font-family: var(--font-family-dmsans-regular);
  font-size: var(--font-size-xs);
  color: var(--color-font-paragraph-light);
  font-weight: var(--font-weight-regular);
`;

export const TourCardButtonAndPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const TourCardButton = styled.button`
  border-radius: var(--border-l);
  background-color: var(--bg-color-input);
  border: var(--border-color-secondary);
  width: 150px;
  height: 54px;
  font-size: var(--font-size-x);
  font-family: var(--font-family-dmsans-regular);
  font-weight: var(--font-weight-regular);
  background-color: var(--bg-color-input);
  color: var(--color-font-secondary);

  :hover {
    background-color: var(--bg-color-secondary-hover-active);
    color: var(--color-font-primary);
    font-weight: var(--font-weight-medium);
  }

  :disabled {
    border: var(--border-color-disable);
    color: var(--color-font-secondary-disabled);
    background-color: var(--bg-color-secondary);
  }
`;

export const TouCardPrice = styled.h5`
  font-family: var(--font-family-dmsans-bold);
  font-size: var(--font-size-m);
  color: var(--color-font-paragraph);
  font-weight: var(--font-weight-bold);
  display: flex;
  align-items: center;
`;

export const CardButtonLink = styled(Link)`
  height: 54px;
  border-radius: var(--border-l);
`;
