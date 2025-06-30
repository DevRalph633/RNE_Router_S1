import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Say hello to your new app</Text>
      <Link href="/login" style={styles.button}>Log in</Link>
      <Link href="/signup" style={styles.button}>Sign up</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'navy',
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'center',
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
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10
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
    color: 'navy',
  },
});