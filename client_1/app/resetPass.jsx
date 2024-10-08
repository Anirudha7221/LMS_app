import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SelectList} from "react-native-dropdown-select-list";
import axios from 'axios';

const resetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selected, setSelected] =useState(null);

  const data = [
    {key :'1', value : 'Admin'},
    {key :'2', value : 'Instructor'},
    {key :'3', value : 'Student'},
  ]


  const handleRegister = async() => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
      try {    
        const responce =await axios.post('http://localhost:8000/resetPass',{
          username: email,
          password,
          userType:selected
        });

        if(responce.status === 200){
          Alert.alert('Registration', 'Password updated successfully!');
          navigation.navigate('login', {role: selected});
        }
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a new Password</Text>

      <SelectList 
          data={data}
          setSelected={setSelected}
          save='value'
          boxStyles={styles.users}
          placeholder='Select your Role'
      />

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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Submit</Text>
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
  users:{
    width: 200,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'blue',
    color: '#333',
    maxHeight: 80
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

export default resetPassword;
