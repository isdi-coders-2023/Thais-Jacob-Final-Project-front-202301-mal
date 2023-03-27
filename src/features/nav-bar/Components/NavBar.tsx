import {
  GoCreateButton,
  GoCreateButtonContainer,
  NavBarContainer,
  NavBarLink,
  NavBarLogo,
} from './NavBarStyled';

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
        <GoCreateButtonContainer>
          <GoCreateButton to={'/app/create-tour'}>Create tour</GoCreateButton>
        </GoCreateButtonContainer>
      </NavBarContainer>
    </>
  );
};
