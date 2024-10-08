import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const Login = ({navigation, route}) => {
  const { role } = route.params || { role: 'User' }; 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async() => {
    Alert.alert('Login', 'Logging in...');
    try {
        const responce = await axios.post('http://localhost:8000/login',{
          username:email,
          password,
          userType: role
        })

        if(responce.status === 200){
          const { token } = response.data;
          await AsyncStorage.setItem('userToken', token);
          navigation.navigate('home');
        }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = () => {
    navigation.navigate('register');
  };

  const handlePassword = () => {
    navigation.navigate('resetPass');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login {role} User</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.link}>Don't have an account? Register</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handlePassword}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  link: {
    color: '#007BFF',
    marginTop: 10,
  },
});

export default Login;
