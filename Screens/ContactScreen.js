import React from 'react';
import { SafeAreaView, Text, StyleSheet} from 'react-native';

const ContactScreen = () => (
    <SafeAreaView style={styles.container}>
      <Text>Contact Screen</Text>
    </SafeAreaView>
)

const styles = StyleSheet.create ({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
})

export default ContactScreen;