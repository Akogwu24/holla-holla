import { KeyboardAvoidingView, StyleSheet, Text } from 'react-native';

export function HomeScreen() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>index</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
