import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackParams = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  'Forgot password': undefined;
};

export interface INavigationProp {
  navigation: NativeStackNavigationProp<StackParams>;
}
