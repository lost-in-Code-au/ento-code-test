import React from 'react';
import { render } from '@testing-library/react';
import ItemMsg from './ItemMsg';
import { shallow } from 'enzyme';

test('ItemMsg can render', () => {
  const tree = render(<ItemMsg />)
  expect(tree).toMatchSnapshot()
});

// Tests needed:
// 1. modal reacts on click on crit or alerts on items