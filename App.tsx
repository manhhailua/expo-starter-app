import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import Main from './src/Main';

export default function App() {
  return (
    <ThemeProvider>
      <Main/>
    </ThemeProvider>
  );
}
