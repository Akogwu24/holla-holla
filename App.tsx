import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { StackParams } from './models';
import { ForgotPassword } from './screens/auth screens/ForgotPassword';
import { LoginScreen } from './screens/auth screens/LoginScreen';
import { RegisterScreen } from './screens/auth screens/RegisterScreen';
import { HomeScreen } from './screens/home';

const Stack = createNativeStackNavigator<StackParams>();

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#2c6bed' },
  headerTitleStyle: { color: '#fff' },
  headerTintColor: 'white',
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={globalScreenOptions}>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Forgot password' component={ForgotPassword} />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
