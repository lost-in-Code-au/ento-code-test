import React from 'react';
import { render } from '@testing-library/react';
import OverView from './OverView';
import { shallow } from 'enzyme';



test('OverView can render', () => {
  const tree = render(<OverView />)
  expect(tree).toMatchSnapshot()
});

test('Container header Text', () => {
  const { getByText } = render(<OverView />);
  
  const linkElement = getByText(/Over-view/i);
  
  expect(linkElement).toBeInTheDocument();
});
