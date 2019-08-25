import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

function Main(): JSX.Element {
  useEffect((): void => {
    // do something
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up src/Main.tsx to start working on your app!</Text>
    </View>
  );
}

export default Main;
