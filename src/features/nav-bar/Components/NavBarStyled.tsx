import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: var(--bg-color-secondary);
  border-bottom: 2px solid #f5f7f9;
  @media (min-width: 1024px) {
    height: 80px;
  }
`;

export const NavBarLogoDesktop = styled.img`
  display: none;
  @media (min-width: 900px) {
    display: block;
    padding-left: 4.5rem;
    width: 240px;
    height: 54px;
  }
`;

export const NavBarLogoMobile = styled.img`
  display: block;
  height: 58px;
  width: 66px;
  padding-left: 1rem;
  @media (min-width: 900px) {
    display: none;
  }
`;

export const NavBarLink = styled(Link)`
  width: 100%;
`;

export const GoCreateButton = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-l);
  background-color: var(--bg-color-primary);
  width: 260px;
  height: 52px;
  font-size: var(--font-size-x);
  font-family: var(--font-family-dmsans-regular);
  font-weight: var(--font-weight-regular);
  color: var(--color-font-primary);

  :hover {
    background-color: var(--bg-color-primary-hover-active);
    font-weight: var(--font-weight-medium);
  }

  :disabled {
    border: var(--border-color-disable);
    color: var(--color-font-secondary-disabled);
    background-color: var(--bg-color-secondary);
  }

  @media (max-width: 900px) {
    width: 130px;
    height: 48px;
  }
`;

export const GoCreateButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 80%;
  padding-right: 24px;

  @media (min-width: 900px) {
    padding-right: 80px;
  }
`;
