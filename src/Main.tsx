import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

function Main(): JSX.Element {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text>Open up src/Main.tsx to start working on your app!</Text>
      </View>
    </ThemeProvider>
  );
}

export default Main;
