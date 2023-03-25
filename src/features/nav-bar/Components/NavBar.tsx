import { NavBarContainer, NavBarLink, NavBarLogo } from './NavBarStyled';

export const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <NavBarLink to={'/app'}>
          <NavBarLogo
            src={'../../assets/logos/logo-malaguide.svg'}
            alt="Malaguide logo"
          />
        </NavBarLink>
      </NavBarContainer>
    </>
  );
};
