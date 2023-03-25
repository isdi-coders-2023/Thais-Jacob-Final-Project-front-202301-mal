import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: var(--bg-color-secondary);
  border-bottom: 2px solid #acb8c3;
  @media (min-width: 1024px) {
    height: 80px;
  }
`;

export const NavBarLogo = styled.img`
  min-height: 20%;

  padding-left: 1rem;
  @media (min-width: 1024px) {
    padding-left: 5.5rem;
    max-height: 50%;
  }
`;

export const NavBarLink = styled(Link)`
  width: 100%;
`;
