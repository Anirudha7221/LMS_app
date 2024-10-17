import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from './navbar';
import axios from 'axios';

const newCourses = () => {
    const [courses, setCourses]= useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const navigation = useNavigation();

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await axios.get('http://localhost:8000/allCourses');

                console.log(response.data);
                setCourses(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[]);

  const handleAddCourse = () => {
    navigation.navigate('addCourse');
  };

  const handleEditCourse = (courseId) => {
    navigation.navigate('editCourse', {courseId})
  };

  const handleDeleteCourse =  async(courseId) => {
    
    try {
      const response = await axios.delete(`http://localhost:8000/RemoveCourse/${courseId}`);

      if(response.status === 200){
        console.log('Course deleted sucessfully');
      }
    } catch (error) {
      console.log(error); 
    }
  };

  return (
    <View>
       <Navbar></Navbar>

       <ScrollView style={styles.section}>
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>New Courses</Text>
          <TouchableOpacity style={styles.addButton} onPress={handleAddCourse}>
              <Text style={styles.addButtonText}>+ Add New Course</Text>
          </TouchableOpacity>
          {loading ? <Text>Loading...</Text> : (
              <FlatList
                  data={courses}
                  renderItem={({ item }) => (
                  <View style={styles.courseCard}>
                      <Image source={{ uri: item.image }} style={styles.courseImage} />
                      <View style={styles.courseInfo}>
                          <Text style={styles.courseTitle}>{item.title}</Text>
                          <Text style={styles.courseDescription}>{item.description}</Text>
                          <Text style={styles.courseStatus}>Status: {item.status}</Text>
                          <Text style={styles.courseEnrollments}>Enrollments: {item.enrollments}</Text>
                          <View style={styles.buttonContainer}>
                              <Button title="Edit" onPress={() => handleEditCourse(item.id)} />
                              <Button title="Delete" onPress={() => handleDeleteCourse(item.id)} />
                          </View>
                      </View>
                  </View>
              )}
              />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#6200ee',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    cursor: 'pointer'
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  courseImage: {
    width: '100%',
    height: 150,
  },
  courseInfo: {
    padding: 16,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 8,
  },
  courseStatus: {
    fontSize: 12,
    color: '#777',
  },
  courseEnrollments: {
    fontSize: 12,
    color: '#777',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default newCourses;
