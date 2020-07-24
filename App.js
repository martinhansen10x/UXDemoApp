import React, { useState } from 'react';
import {  StyleSheet, View } from 'react-native';
import AppNavigator from './App/src/navigation/AppNavigator';

console.disableYellowBox = true;

export default function App(props) {
  
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
