import React from 'react';
import { render } from '@testing-library/react';
import Tweet from './Tweet';

test('renders learn react link', () => {
  const { getByText } = render(<Tweet />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
