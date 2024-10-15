import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Index = ({navigation}) => {

    const handleRoleSelect = (role) => {
      console.log(`navigate to the login with role as a ${role}`)
      navigation.navigate('login', {role});
      
  };

  return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to Learning App</Text>
        <Text style={styles.subHeader}>Please select your role:</Text>
        <Image 
            source={{uri: 'https://cdni.iconscout.com/illustration/premium/thumb/mobile-learning-app-illustration-download-in-svg-png-gif-file-formats--graduation-study-online-pack-school-education-illustrations-2932179.png'}}
            style={{width: 350, height: 300}}
        />
        <View style={styles.user}>
          <TouchableOpacity style={styles.button} onPress={() => handleRoleSelect('Admin')}>
            <Text style={styles.buttonText}>Admin</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button} onPress={() => handleRoleSelect('Instructor')}>
            <Text style={styles.buttonText}>Instructor</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button} onPress={() => handleRoleSelect('Student')}>
            <Text style={styles.buttonText}>Student</Text>
          </TouchableOpacity>
        </View>
    </View>    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  user:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    padding: 15,
    margin: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default Index;

