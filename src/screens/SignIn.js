import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default ({ navigation, state }) => (
  <View style={styles.container}>
    <View style={styles.card}>
      <Button
        title="Sign In"
        color="#841584"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    flex:1,
    margin: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: 'white'
  }
})