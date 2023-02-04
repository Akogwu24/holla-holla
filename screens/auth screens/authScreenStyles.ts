import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '85%',
  },
  button: {
    width: '85%',
    marginTop: 10,
  },
  register: { marginTop: 10 },
  forgotPasswordContainer: {
    width: '80%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgotPassword: {
    textAlign: 'right',
    maxWidth: 300,
  },
});
