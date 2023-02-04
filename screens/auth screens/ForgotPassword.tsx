import { Image, KeyboardAvoidingView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLayoutEffect, useState } from 'react';
import { INavigationProp } from '../../models';
import { styles } from './authScreenStyles';
import { Button, Input } from '@rneui/base';

export function ForgotPassword({ navigation }: INavigationProp) {
  const [email, setEmail] = useState<string>('');

  useLayoutEffect(() => {
    navigation.setOptions({ headerBackTitle: 'Back' });
  }, []);

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar />
      <Image style={{ width: 150, height: 150 }} source={require('../../assets/holla.png')} />
      <View style={styles.inputContainer}>
        <Input placeholder='Enter your registered Email' autoFocus value={email} onChangeText={(val) => setEmail(val)} />
      </View>
      <Button containerStyle={[styles.button, styles.register]} title='Reset Password' onPress={() => navigation.navigate('Home')} />
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.forgotPassword}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 80 }} />
    </KeyboardAvoidingView>
  );
}
