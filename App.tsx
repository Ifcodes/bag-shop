import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import AppRouter from './src/app-router';
import BottomNav from './src/molecules/bottom-nav';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <BottomNav />
        <StatusBar style="auto" />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
