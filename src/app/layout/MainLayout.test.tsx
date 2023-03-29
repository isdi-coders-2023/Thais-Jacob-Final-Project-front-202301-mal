import React from 'react';
import { render, screen } from '@testing-library/react';
import MainLayout from './MainLayout';
import { BrowserRouter } from 'react-router-dom';

test('When rendering mainlayout, then navbar and outlet must be in the document', () => {
  render(
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>,
  );
  const navBarElement = screen.getAllByAltText('Malaguide logo');
  navBarElement.map(element => expect(element).toBeInTheDocument());

  const outletElement = screen.getByRole('main');
  expect(outletElement).toBeInTheDocument();
});
