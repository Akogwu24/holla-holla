import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { styles } from './authScreenStyles';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Input } from '@rneui/base';
import { INavigationProp } from '../../models';

interface IFormTypes {
  name: string;
  email: string;
  password: string;
}

export function RegisterScreen({ navigation }: INavigationProp) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useLayoutEffect(() => {
    navigation.setOptions({ headerBackTitle: 'Back' });
  }, []);

  const handleRegister = () => {
    console.log({ name, password, email });
  };

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light' />
      <Image style={{ width: 150, height: 150 }} source={require('../../assets/holla.png')} />
      <View style={styles.inputContainer}>
        <Input placeholder='Name' autoFocus value={name} onChangeText={(val) => setName(val)} />
        <Input placeholder='Email' value={email} onChangeText={(val) => setEmail(val)} />
        <Input placeholder='Password' secureTextEntry value={password} onChangeText={(val) => setPassword(val)} />
      </View>
      <Button containerStyle={styles.button} title='Register' onPress={handleRegister} />

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.forgotPassword]}>
          <Text>Already have an Account? Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
}
