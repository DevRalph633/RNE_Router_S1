import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && password) {
      setSubmitted(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleClear = () => {
    setEmail('');
    setPassword('');
    setSubmitted(false);
  };


  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        placeholder="E-mail or phone number"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Text style={styles.or}>OR</Text>
          <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login with Facebook</Text>
      </Pressable>

      <Text style={styles.or}> </Text>

      <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.clearButton]} onPress={handleClear}>
            <Text style={styles.buttonText}>Clear</Text>
          </Pressable>

      {submitted && (
          <View style={styles.output}>
            <Text style={styles.outputTitle}>Submitted Information:</Text>
            <Text>Email: {email}</Text>
            <Text>Age: {password}</Text>
          </View>
        )}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'navy',
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    color: 'skyblue'
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
    or: {
    fontSize: 20,
    marginBottom: 10,
    marginTop:10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  output: {
    marginBottom: 10,
    marginTop:10,
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 8,
  },
  outputTitle: {
    marginBottom: 10,
    marginTop:10,
    fontWeight: 'bold',
  },
  clearButton: {
    marginBottom: 10,
    marginTop:10,
    backgroundColor: '#ff0000ff', // Red button for clear
  },
});