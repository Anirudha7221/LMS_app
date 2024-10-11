import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity, Image } from 'react-native';
import Navbar from './navbar';
import axios from 'axios';

const Dashboard = ({navigation}) => {

  const [courses, setCourses]=useState([]);
  const [assignments, setAssignments]=useState([]);
  const [announcement, setAnnouncement]=useState([]);

  useEffect(()=>{
      const fetchData = async() =>{
          try {
            const courseData = await axios.get('http://localhost:8000/dashboard/courses');

            const assignmentData = await axios.get('http://localhost:8000/dashboard/assignments');

            const announcementData = await axios.get('http://localhost:8000/dashboard/annoucements');

            setCourses(courseData.data);
            setAssignments(assignmentData.data);
            setAnnouncement(announcementData.data);

          } catch (error) {
            console.log('Error to get datas');
          }
      };
      fetchData();
  },[]);

    return (
      <ScrollView style={styles.container}>
        <Navbar></Navbar>
  
        <View style={styles.progressSection}>
          <View style={styles.section}>
            <Text style={styles.header}>Progress Summary</Text>
            <Text style={styles.progressText}>You're doing great! Keep it up!</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>My Courses</Text>
          <ScrollView horizontal={true} style={styles.coursesList}>
            {courses.map(course => (
              <TouchableOpacity key={course.id} style={styles.courseCard}>
                <Image style={styles.Image} source={course.image}></Image>
                <Text style={styles.Title}>{course.title}</Text>
                <Text style={styles.announcementDate}>{course.duration}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View>
            <Text style={styles.header}>Upcoming Assignments</Text>
            <ScrollView>
            {assignments.map(announcement => (
                <View key={announcement.id} style={styles.announcementCard}>
                <Text style={styles.Title}>{announcement.assignment.title}</Text>
                <Text style={styles.announcementDate}>Due: {announcement.assignment.dueDate}</Text>
                </View>
            ))}
            </ScrollView>
      </View>

      <View style={styles.section}>
          <Text style={styles.header}>Announcements</Text>
          <ScrollView>
            {announcement.map(announcement => (
              <View key={announcement.id} style={styles.announcementCard}>
                <Text style={styles.Title}>{announcement.title}</Text>
                <Text style={styles.announcementContent}>{announcement.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
      padding: 10,
    },
    Image:{
      width: '100%',
      height: '20vh'
    },
    header: {
      marginBottom: 10,
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'purple',
      textTransform: 'uppercase'
    },
    section: {
      marginBottom: 20,
    },
    Title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    coursesList: {
      flexDirection: 'row',
    },
    courseCard: {
      backgroundColor: '#fff',
      padding: 10,
      marginRight: 10,
      borderRadius: 5,
      elevation: 2,
    },
    progressText: {
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold'
    },
  });
  
  export default Dashboard;