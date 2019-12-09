import React from 'react';
import { render } from '@testing-library/react';
import Container from './Container';
import { shallow } from 'enzyme';

test('Container can render', () => {
    const tree = render(<Container />)
    expect(tree).toMatchSnapshot()
});
