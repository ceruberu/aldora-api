import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.card}>
      <Button
        title="Sign Up"
        color="#841584"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20
  },
  card: {
    flex:1,
    padding: 50,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  }
})