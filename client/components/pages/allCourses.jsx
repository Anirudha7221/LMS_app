import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList,ScrollView, TouchableOpacity, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import axios from 'axios';

const CoursesList = ({ courses }) => (
  <FlatList
    data={courses}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      // <View style={styles.courseItem}>
      //   <Text style={styles.Title}>{item.title}</Text>
      //   <Text style={styles.description}>{item.description}</Text>
      //   <Text style={styles.description}>{item.duration}</Text>
      // </View>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.coursesCard}>
            <Image
                source={item.image}
                style={styles.coursesImage}
            />
             <Text style={styles.coursesTitle}>{item.title}</Text>
             <Text style={styles.coursesText}>{item.description}</Text>
             <Text>{item.duration}</Text>
          </TouchableOpacity>
      </ScrollView>
    )}
  />
);

const FirstRoute = ({ courses }) => (
  <View style={styles.scene}>
    <Text style={styles.Title}>Popular Courses</Text>
    <CoursesList courses={courses} />
  </View>
);

const SecondRoute = ({ courses }) => (
  <View style={styles.scene}>
    <Text style={styles.Title}>New Courses</Text>
    <CoursesList courses={courses} />
  </View>
);

const ThirdRoute = ({ courses }) => (
  <View style={styles.scene}>
    <Text style={styles.Title}>Recommended for You</Text>
    <CoursesList courses={courses} />
  </View>
);

const allCourses = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'popular', title: 'Popular' },
    { key: 'new', title: 'New' },
    { key: 'recommended', title: 'Recommended' },
  ]);

  const [courses, setCourses] = useState({
    popular: [],
    new: [],
    recommended: []
  });

  useEffect(()=>{
    const fetchData = async()=>{
        try {
          const responce = await axios.get('http://localhost:8000/allCourses');
          const data = responce.data;

          const popularCourses = data.filter(courses => courses.category === 'popular');
          const newCourses = data.filter(courses => courses.category === 'new');
          const recommendedCourses = data.filter(courses => courses.category === 'recommended');

          setCourses({
            popular: popularCourses,
            new: newCourses,
            recommended: recommendedCourses
          });
          console.log(data);
        } catch (error) {
          console.log(error);
        } 
    }
    fetchData();
  },[])


  const renderScene = ({ route })=>{
    switch(route.key){
      case 'popular': return <FirstRoute courses={courses.popular}></FirstRoute>;

      case 'new': return <SecondRoute courses={courses.new}></SecondRoute>;

      case 'recommended': return <ThirdRoute courses={courses.recommended}></ThirdRoute>;

      default: return null;
    }
  }

  const renderTabBar = props => (
    <TabBar
      {...props}
      style={styles.tabBar}
      indicatorStyle={styles.indicator}
      labelStyle={styles.label}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: 300 }} // Adjust width based on your layout
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: '#6200ee',
  },
  indicator: {
    backgroundColor: '#fff',
  },
  label: {
    color: '#fff',
  },
  courseItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  coursesCard:{
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  coursesTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  coursesText:{
    fontSize: 14, 
  },
  coursesImage: {
    borderRadius: 10,
    width: '100%',
    height: '20vh'
  }
});

export default allCourses;