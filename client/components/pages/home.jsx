import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import axios from 'axios';
import CourseCard from './courseCard';
import Searchbar from './searchbar'

const Home = () =>{

    const [course, setCourse]=useState([]);

    const fetchCourses = async()=>{
        try {
            const response = await axios.get('http://localhost:8000/home/courses');
            setCourse(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchCourses();
    },[]);

    return(
        <View style={styles.navbar}>
            <Searchbar></Searchbar>
            <TouchableOpacity style={styles.header} onPress={fetchCourses}>
                <Text>See All Courses</Text>
            </TouchableOpacity>
            <ScrollView>
                {course.map((course)=>{
                    <CourseCard key={course.id} course={course}></CourseCard>
                })}
            </ScrollView>
        </View>
    ) 
};

const styles = StyleSheet.create({
    header:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertival: 16
    },
});

export default Home;