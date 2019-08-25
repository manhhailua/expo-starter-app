import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../Main';

it('renders Main correctly', () => {
  renderer.create(<Main />);
});
