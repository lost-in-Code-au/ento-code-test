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


// Tests needed:
// 1. inputs update state for submition to redux
// 2. redux successfully taked submitable object
// 3. submitable objects are crosschecked for validation for both data 
//    type and to pick up on crit & alerts for overview window
// 4. Modal reacts on input failuire