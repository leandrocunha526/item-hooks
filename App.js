import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Product from "./src/components/Product";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar style="auto" />
    <Product/>   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    backgroundColor: '#ffffff',
  },
});
