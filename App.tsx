import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import Main from './src/Main';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default App;
