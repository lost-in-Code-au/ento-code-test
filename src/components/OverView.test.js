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


// Tests needed:
// 1. items can be added
// 2. items can have crit and alert status
// 3. crit and alerts can be clicked
// 4. items can be deleted