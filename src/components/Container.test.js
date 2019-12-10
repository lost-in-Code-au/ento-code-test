import React from 'react';
import { render } from '@testing-library/react';
import Container from './Container';
import { shallow } from 'enzyme';

test('Container can render', () => {
    const tree = render(<Container />)
    expect(tree).toMatchSnapshot()
});

// Tests needed:
// 1. check that connection with store/redux is working
// 2. check proptypes of incoming objects