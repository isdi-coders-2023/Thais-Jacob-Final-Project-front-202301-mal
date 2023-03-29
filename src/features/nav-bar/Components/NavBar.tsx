import {
  GoCreateButton,
  GoCreateButtonContainer,
  NavBarContainer,
  NavBarLink,
  NavBarLogoDesktop,
  NavBarLogoMobile,
} from './NavBarStyled';

export const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <NavBarLink to={'/app'}>
          <NavBarLogoDesktop
            src={'../../assets/logos/logo-malaguide.svg'}
            alt="Malaguide logo"
          />
          <NavBarLogoMobile
            src={'../../assets/logos/logo-malaguide-mobile.svg'}
            alt="Malaguide logo"
          />
        </NavBarLink>
        <GoCreateButtonContainer>
          <GoCreateButton to={'/app/create-tour'}>Create tour</GoCreateButton>
        </GoCreateButtonContainer>
      </NavBarContainer>
    </>
  );
};
