import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/FontAwesome';

const Dashboard = () => {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, User!</Text>
          <View style={styles.header}>
                <Icon3 style={styles.icons} name='search'></Icon3>
                <Icon style={styles.icons} name='notifications-outline'></Icon>
                <Icon4 style={styles.icons} name='user-circle'></Icon4>
          </View>
        </View>
  
        <View style={styles.progressSection}>
          <Text style={styles.sectionTitle}>Progress Overview</Text>
        </View>

        <View style={styles.upcomingSection}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
        </View>
  
        <View style={styles.achievementsSection}>
          <Text style={styles.sectionTitle}>Achievements</Text>
        </View>
  
        <View style={styles.quickAccessSection}>
          <Text style={styles.sectionTitle}>Quick Access</Text>

        </View>
  
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Content</Text>
        </View>
  
        <View style={styles.communitySection}>
          <Text style={styles.sectionTitle}>Community Engagement</Text>
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f8f8f8',
    },
    header: {
      paddingVertical: 16,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    greeting: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginVertical: 8,
    },
    icons:{
        padding: 5,
        cursor: 'pointer',
        fontSize: 18,
    },
  });
  
  export default Dashboard;