import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const SignupScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = () => {
    if (name && phone && email && password) {
      setSubmitted(true);
    } else {
      alert('Please fill out all fields.');
    }
  };
  
  const handleClear = () => {
    setName('');
    setPhone('');
    setEmail('');
    setPassword('');
    setSubmitted(false);
  };
  

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Add your signup logic here
    console.log('Signing up with:', email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create new account</Text>

      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
    
        <TextInput
        placeholder="Phone number"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />

      <TextInput
        placeholder="Email-Address"
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


      <Pressable style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
                  <Text>Name: {name}</Text>
                  <Text>Phone: {phone}</Text>
                  <Text>Email: {email}</Text>
                  <Text>Password: {password}</Text>
                </View>
              )}
    </View>
  );
};

export default SignupScreen;

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
    color:'white'
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