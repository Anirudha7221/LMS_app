import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import CourseCard from "../components/pages/CourseCard";
import Searchbar from "../components/pages/Searchbar";
import axios from 'axios';

const Home = () =>{

    const [course, setCourse]=useState([]);

    useEffect(()=>{
        async function fetchCourses(){
            try {
                const response = await axios.get('http://localhost:8000/home/courses');
                setCourse(response.data);
            } catch (error) {
                console.log(error);
            }
        }
    },[]);

    return(
        <View style={styles.containeer}>
            <Searchbar></Searchbar>
            <TouchableOpacity style={styles.header} onPress={fetchCourses}>Featured courses</TouchableOpacity>
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
    containeer: {
        flex: 1,
        padding: 16
    }
});

export default Home;