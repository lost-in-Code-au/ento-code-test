import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';
import { shallow } from 'enzyme';


test('Form can render', () => {
  const tree = render(<Form />)
  expect(tree).toMatchSnapshot()
});

test('Container header Text', () => {
  const { getByText } = render(<Form />);
  
  const linkElement = getByText(/Form/i);
  
  expect(linkElement).toBeInTheDocument();
});
