import { HomeScreen } from 'screens';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

export default function RootStackNavigator({ state }: { state: any }) {
  return (
    <NavigationContainer>
      {Platform.OS === 'ios' && <StatusBar style='auto' />}
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name='Home'
          component={HomeScreen}
          initialParams={{ appIsReady: state.appIsReady }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
