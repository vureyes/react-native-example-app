import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

export default function App() {
  return (
    <View style={styles.container}>
      <PostList />
      <PostForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
});
