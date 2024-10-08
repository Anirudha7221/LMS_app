import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const CourseCard =()=>{
    return(
        <TouchableOpacity style={Styles.card}>
            <Image source={{uri: course.image}} style={Styles.Image}></Image>
            <Text style={Styles.title}>{course.title}</Text>
            <Text style={Styles.descpt}>{course.description}</Text>
        </TouchableOpacity>
    )
};

const Styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        padding: 10,
        margin: 10,
        elevation: 3
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5
    },
    image:{
        width: '100%',
        height: 150,
        borderRadius: 8
    },
    descpt:{
        fontSize: 14,
        color: "#555"
    }
});

export default CourseCard;