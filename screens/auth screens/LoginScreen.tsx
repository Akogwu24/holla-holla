import { KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Button, Image } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { Input } from '@rneui/base';
// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { INavigationProp, StackParams } from '../../models';
import { styles } from './authScreenStyles';

export const LoginScreen = ({ navigation }: INavigationProp) => {
  //another way usying th useNavigation hook with typing
  // const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    console.log({ email, password });
    navigation.navigate('Home');
  };
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light' />
      <Image style={{ width: 150, height: 150 }} source={require('../../assets/holla.png')} />
      <View style={styles.inputContainer}>
        <Input placeholder='Email' autoFocus value={email} onChangeText={(val) => setEmail(val)} />
        <Input placeholder='Password' secureTextEntry value={password} onChangeText={(val) => setPassword(val)} onSubmitEditing={handleLogin} />
      </View>
      <Button containerStyle={styles.button} title='Login' onPress={handleLogin} />
      <Button containerStyle={[styles.button, styles.register]} type='outline' title='Register' onPress={() => navigation.navigate('Register')} />
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Forgot password')} style={styles.forgotPassword}>
          <Text>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 80,
        }}
      />
    </KeyboardAvoidingView>
  );
};
