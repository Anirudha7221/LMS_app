import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Navbar from './navbar';
import { ScrollView } from 'react-native';

const Settings = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState('Medium');
  const [language, setLanguage] = useState('English');

  const Notifications = () => setNotificationsEnabled(!notificationsEnabled);
  const DarkMode = () => setDarkMode(!darkMode);

  return (
     <ScrollView>
        <Navbar></Navbar>

        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Profile Settings</Text>
            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('EditProfile')}>
                <Text style={styles.optionText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('resetPass')}>
                <Text style={styles.optionText}>Change Password</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>App Preferences</Text>
            <View style={styles.option}>
                <Text style={styles.optionText}>Notifications</Text>
                <Switch
                onValueChange={Notifications}
                value={notificationsEnabled}
                />
            </View>
            <View style={styles.option}>
                <Text style={styles.optionText}>Dark Mode</Text>
                <Switch
                onValueChange={DarkMode}
                value={darkMode}
                />
            </View>
            <View style={styles.option}>
                <Text style={styles.optionText}>Font Size</Text>
                <TextInput
                style={styles.input}
                value={fontSize}
                onChangeText={setFontSize}
                placeholder="Medium"
                />
            </View>
            <View style={styles.option}>
                <Text style={styles.optionText}>Language</Text>
                <TextInput
                style={styles.input}
                value={language}
                onChangeText={setLanguage}
                placeholder="English"
                />
            </View>

            <Text style={styles.sectionTitle}>Account Management</Text>
            <TouchableOpacity style={styles.option} onPress={() => {alert('Signing Out'); navigation.navigate('login')}}>
                <Text style={styles.optionText}>Sign Out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => alert('Delete Account')}>
                <Text style={styles.optionText}>Delete Account</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>App Information</Text>
            <TouchableOpacity style={styles.option} onPress={() => alert('Terms of Service')}>
                <Text style={styles.optionText}>Terms & Conditions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => alert('Privacy Policy')}>
                <Text style={styles.optionText}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => alert('Help & Support')}>
                <Text style={styles.optionText}>Help & Support</Text>
            </TouchableOpacity>
        </View>
     </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    width: 100,
  },
});

export default Settings;
