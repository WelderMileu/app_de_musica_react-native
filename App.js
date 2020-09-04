import React from 'react';
import { StatusBar } from 'react-native';

import Route from './src/routes';

export default function App() {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#555" />
      <Route />
    </React.Fragment>
  );
}
