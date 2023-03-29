import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DetailFeedBackError = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
  text-align: center;
  font-family: var(--font-family-dmsans-regular);
  font-size: var(--font-size-xxs);
  color: var(--color-font-form-error);
`;

export const DetailContainer = styled.section``;

export const DetailImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  height: 261px;
  @media (min-width: 900px) {
    height: 390px;
  }
`;

export const DetailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  height: 390px;
  @media (max-width: 900px) {
    height: 261px;
  }
`;

export const GeneralInfosContainer = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: #f8fdff;
  display: flex;
  flex-direction: column;
  width: 100hv;
  @media (min-width: 900px) {
    padding-top: 40px;
    padding-bottom: 48px;
  }
`;

export const TourTitleContainer = styled.h2`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
  text-align: center;
  font-family: var(--font-family-dmsans-bold);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  @media (min-width: 900px) {
    padding-bottom: 40px;
    font-family: var(--font-family-dmsans-medium);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-xxl);
  }
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  text-align: center;
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    gap: 32px;
  }
`;

export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitleInfo = styled.p`
  font-size: var(--font-size-xxxs);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-dmsans-bold);
  color: var(--color-font-paragraph);
`;

export const InfoTour = styled.p`
  font-size: var(--font-size-xxxs);
  font-weight: var(--font-weight-regular);
  font-family: var(--font-family-dmsans-regular);
  color: var(--color-font-paragraph);
`;

export const Divider = styled.div`
  width: 20%;
  margin: 0 auto;
  border-right: none;
  border-bottom: 2px solid #eaf1ec;
  @media (min-width: 900px) {
    width: 0;
    margin: 0;
    border-right: 2px solid #eaf1ec;
    border-bottom: none;
  }
`;

export const BodyInfo = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  align-items: center;
  @media (min-width: 900px) {
    flex-direction: row;
    padding-top: 48px;
    padding-bottom: 48px;
    padding-left: 160px;
    padding-right: 160px;
  }
`;

export const TittleAndDescription = styled.div`
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;
  @media (min-width: 900px) {
    width: 50%;
  }
`;

export const TittleTour = styled.h5`
  font-family: var(--font-family-dmsans-bold);
  font-size: var(--font-size-m);
  color: var(--color-font-secondary);
  font-weight: var(--font-weight-bold);
  width: 100%;
`;

export const DescriptionTour = styled.p`
  font-size: var(--font-size-xxxs);
  font-weight: var(--font-weight-regular);
  font-family: var(--font-family-dmsans-regular);
  color: var(--color-font-paragraph);
  line-height: 22px;
  padding-top: 16px;
  padding-bottom: 48px;
`;

export const VideoAndPaymentContainer = styled.div`
  padding-right: 24px;
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PaymentInfo = styled.p`
  text-align: center;
  font-size: var(--font-size-xxxs);
  font-weight: var(--font-weight-regular);
  font-family: var(--font-family-dmsans-regular);
  color: var(--color-font-paragraph-light);
`;

export const BackButton = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-l);
  border: var(--border-color-secondary);
  width: 100%;
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
  @media (min-width: 900px) {
    width: 160px;
    height: 54px;
  }
`;
