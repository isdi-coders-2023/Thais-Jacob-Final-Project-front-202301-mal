import styled from 'styled-components';

export const ToursCardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  justify-items: center;
  gap: 40px;
  margin: 0 auto;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 340px);
  }
`;

export const FeedBackError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 16px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const FeedBackErrorImage = styled.img`
  width: 250px;
  @media (min-width: 1024px) {
    font-size: var(--font-size-m);
    width: 384px;
  }
`;

export const FeedBackErrorText = styled.h3`
  font-family: var(--font-family-dmsans-bold);
  text-align: center;
  font-size: var(--font-size-m);
  color: var(--color-font-secondary);
  font-weight: var(--font-weight-bold);
  width: 100%;
  @media (min-width: 1024px) {
    font-size: var(--font-size-xl);
  }
`;
