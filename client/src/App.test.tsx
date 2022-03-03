import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { debug } from 'console';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn react/i);
  debug();
  expect(linkElement).toBeInTheDocument();
});
