import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AboutScreen = () => {
    const insets = useSafeAreaInsets();
    
    return(
      <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
        <Text>About Screen</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AboutScreen;