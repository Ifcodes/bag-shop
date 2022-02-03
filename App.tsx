import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppRouter from './src/app-router';
import BottomNav from './src/molecules/bottom-nav';

export default function App() {
  return (
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
     
  );
}


