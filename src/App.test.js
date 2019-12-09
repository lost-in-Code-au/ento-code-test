import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';


test('App can render', () => {
  const tree = render(<App />)
  expect(tree).toMatchSnapshot()
});
