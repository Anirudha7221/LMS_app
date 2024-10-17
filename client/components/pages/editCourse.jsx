import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet, Alert } from 'react-native';
import Navbar from './navbar';
import axios from 'axios';

const EditCourses = ({ userType, route, navigation }) => {
  const courseId = route.params;
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');

  const handleSave = async () => {
    if (userType !== 'instructor') {
      Alert.alert('Access Denied', 'Only instructors can add courses.');
      navigation.goBack();
      return;
    }

    try {
      const response = await axios.post(`http://your-api-url.com/Editcourse/${courseId}`, {
        title,
        category,
        description,
        duration
      });
      
      if( response.status === 200){
        Alert.alert('Success', 'Course modified successfully!');
        navigation.goBack();
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to edit the course.');
    }
  };

  return (
    <View>
        <Navbar></Navbar>

        <View style={styles.container}>
            <Text style={styles.label}>Course Title</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter new course title"
                value={title}
                onChangeText={setTitle}
            />

            <Text style={styles.label}>Category</Text>
            <Picker
                selectedValue={category}
                onValueChange={(itemValue) => setCategory(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Select category" value="" />
                <Picker.Item label="popular" value="webDevelopment" />
                <Picker.Item label="new" value="dataScience" />
                <Picker.Item label="recommended" value="mobileDevelopment" />
            </Picker>

            <Text style={styles.label}>Description</Text>
            <TextInput
                style={[styles.input, { height: 100 }]}
                placeholder="Enter course description"
                value={description}
                onChangeText={setDescription}
                multiline
            />

            <Text style={styles.label}>Change Duration (Hours)</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter duration in hours"
                value={duration}
                onChangeText={setDuration}
                keyboardType="numeric"
            />

            <Button
                title="Save Course"
                onPress={handleSave}
                disabled={userType !== 'instructor'}
                color={userType !== 'instructor' ? 'gray' : 'blue'}
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default EditCourses;