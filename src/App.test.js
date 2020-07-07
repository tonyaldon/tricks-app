import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Header from './App';

test('renders header content', () => {
  const { getByText } = render(<Header />);
  const headerContent = getByText(/Tricks by Tony Aldon/i);
  expect(headerContent).toBeInTheDocument();
});
