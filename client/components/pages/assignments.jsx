import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import Navbar from './navbar';
import axios from 'axios';

const Assignments = ()=>{
    const [assignments, setAssignments]=useState([]);

    useEffect(()=>{
        const assignmentData=async()=>{
            try {
                const responce = await axios.get('http://localhost:8000/assignments');

                setAssignments(responce.data);
            } catch (error) {
                console.log(error);
            }
        }
        assignmentData();
    });

    return(
        <View>
            <Navbar></Navbar>
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
    )
};

const styles = StyleSheet.create({
    header: {
        marginBottom: 10,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'purple',
        textTransform: 'uppercase'
      },
      Title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      announcementCard: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        elevation: 2,
      },
      announcementContent: {
        fontSize: 14,
        color: '#666',
      },
      announcementDate: {
        fontSize: 12,
        color: '#888',
      },
})

export default Assignments;