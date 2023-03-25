import styled from 'styled-components';

const LoadingContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingImage = styled.img`
  max-width: 50%;
  max-height: 50%;
`;

export const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingImage
        src={'../../assets/loading/loading-page.gif'}
        alt="Waiting for data loading"
      />
    </LoadingContainer>
  );
};

const LoadingButtonContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const LoadingButtonImage = styled.img`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  height: 20px;
`;

export const LoadingButton = () => {
  return (
    <LoadingButtonContainer>
      <LoadingButtonImage
        src={'../../assets/loading/loading-button.gif'}
        alt="Waiting for data loading"
      />
    </LoadingButtonContainer>
  );
};
