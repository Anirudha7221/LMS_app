import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image} from "react-native";
import Icon from '@expo/vector-icons/FontAwesome';
import Navbar from './navbar';

const Home = ({navigation}) =>{

    return(
        <ScrollView>
            <Navbar></Navbar>

            <View style={styles.categoriesSection}>
                <Text style={styles.sectionTitle}>Explore Categories</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
                    <TouchableOpacity style={styles.categoryCard}>
                        <Icon name="code" size={40} color="#fff" />
                        <Text style={styles.categoryText}>Development</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryCard}>
                        <Icon name="paint-brush" size={40} color="#fff" />
                        <Text style={styles.categoryText}>Design</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryCard}>
                        <Icon name="line-chart" size={40} color="#fff" />
                        <Text style={styles.categoryText}>Business</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryCard}>
                        <Icon name="language" size={40} color="#fff" />
                        <Text style={styles.categoryText}>Languages</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <View style={styles.featuredCoursesSection}>
                <Text style={styles.sectionTitle}>Featured Courses</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={styles.courseCard}>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnfIof6ceNh1_AxUCiJf3CrKeJRGcGU_HN6A&s' }}
                            style={styles.courseImage}
                        />
                        <Text style={styles.courseTitle}>React Native for Beginners</Text>
                        <Text style={styles.courseInstructor}>by John Doe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.courseCard}>
                        <Image
                            source={{ uri: 'https://d1aeya7jd2fyco.cloudfront.net/thumbnail/online-ui-ux-design-bootcamp-course.webp' }}
                            style={styles.courseImage}
                        />
                        <Text style={styles.courseTitle}>UI/UX Design Bootcamp</Text>
                        <Text style={styles.courseInstructor}>by Jane Smith</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <TouchableOpacity style={styles.ctaButton} onPress={() => navigation.navigate('allCourses')}>
                <Text style={styles.ctaText}>Browse All Courses</Text>
            </TouchableOpacity>

            <View style={styles.instructorsSection}>
                <Text style={styles.sectionTitle}>Top Instructors</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>      
                    <TouchableOpacity style={styles.instructorCard}>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUJ80cmux1PEz2IxhUKZ6MqZz7ylGuLuO5g&s'}}
                            style={styles.instructorImage}
                        />
                        <Text style={styles.instructorName}>Michael Lee</Text>
                        <Text style={styles.instructorCourses}>12 Courses</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.instructorCard}>
                    <Image
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbrJjZSFDRpSGa30u5aYm7-5u5abkJ8a7yoQ&s' }}
                        style={styles.instructorImage}
                    />
                    <Text style={styles.instructorName}>John Doe</Text>
                    <Text style={styles.instructorCourses}>10 Courses</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.instructorCard}>
                    <Image
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgRvU16HTrbatzTX9i3m-QhuUYoKRqMStIow&s' }}
                        style={styles.instructorImage}
                    />
                    <Text style={styles.instructorName}>Jane Smith</Text>
                    <Text style={styles.instructorCourses}>8 Courses</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </ScrollView>
    ) 
};

const styles = StyleSheet.create({
    categoriesSection: {
        marginTop: 20,
        paddingHorizontal: 20,
      },
      sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      categoriesScroll: {
        flexDirection: 'row',
      },
      categoryCard: {
        backgroundColor: '#4A90E2',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginRight: 15,
        width: 120,
      },
      categoryText: {
        color: '#fff',
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
      },
      featuredCoursesSection: {
        marginTop: 20,
        paddingHorizontal: 20,
      },
      courseCard: {
        width: 200,
        marginRight: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5,
      },
      courseImage: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      courseTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10,
      },
      courseInstructor: {
        fontSize: 14,
        color: '#7d7d7d',
        marginBottom: 10,
        marginHorizontal: 10,
      },
      ctaButton: {
        backgroundColor: '#4A90E2',
        margin: 20,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      ctaText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      instructorsSection: {
        marginTop: 20,
        paddingHorizontal: 20,
      },
      sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      instructorCard: {
        width: 140,
        marginRight: 15,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5,
        paddingVertical: 15,
      },
      instructorImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
      },
      instructorName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
      },
      instructorCourses: {
        fontSize: 14,
        color: '#7d7d7d',
        marginTop: 5,
      },
});

export default Home;