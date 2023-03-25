import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loading, LoadingButton } from './Loading';

describe('General loading Component', () => {
  test('should display a general loading', () => {
    render(<Loading />);
    const loadingImage = screen.getByAltText('Waiting for data loading');
    expect(loadingImage).toBeInTheDocument();
  });

  test('should display the general loading in the center of the container', () => {
    render(<Loading />);
    const loadingContainer = screen.getByRole('main');
    expect(loadingContainer).toHaveStyle({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    });

    const loadingImage = screen.getByRole('img');
    expect(loadingImage).toHaveStyle({
      maxWidth: '50%',
      maxHeight: '50%',
    });
  });
});

describe('Button loading Component', () => {
  test('should display a button loading', () => {
    render(<LoadingButton />);
    const loadingButton = screen.getByAltText('Waiting for data loading');
    expect(loadingButton).toBeInTheDocument();
  });

  test('should display the button loading in the center of the container', () => {
    render(<LoadingButton />);
    const loadingButtonContainer = screen.getByRole('main');
    expect(loadingButtonContainer).toHaveStyle({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    });

    const loadingButtonImage = screen.getByRole('img');
    expect(loadingButtonImage).toHaveStyle({
      top: '50%',
      left: '50%',
      position: 'absolute',
      transform: 'translate(-50%,-50%)',
      height: '20px',
    });
  });
});
