import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/FontAwesome';

const Navbar = ()=>{

    const navigation = useNavigation();

    const [searchbarVisible, setSearchbarVisible]=useState(false);
    const [profileVisible, setProfileVisible]=useState(false);
    const [menulistVisible, setMenulistVisible]=useState(false);
    const [text, setText]=useState('');
    const [username, setUsername]=useState('User');

    const showSearchbar = ()=>{
        setSearchbarVisible(!searchbarVisible);
    }

    const showProfile = ()=>{
        setProfileVisible(!profileVisible);
        setSearchbarVisible(false);
        setMenulistVisible(false);
    }

    const showMenuList =()=>{
        setMenulistVisible(!menulistVisible)
        setProfileVisible(false);
        setSearchbarVisible(false);
    }

    return(
        <View style={Styles.navbar}>
            {!searchbarVisible &&(
                <View style={Styles.dropdown}>
                    <Pressable
                        onPress={showMenuList}
                    >
                        <Icon2 name='menu' style={Styles.icons}></Icon2>
                    </Pressable>
                    { menulistVisible && (
                        <View style={Styles.dropdown_list}>
                            <View style={Styles.dropdown_item}>
                                <TouchableOpacity onPress={()=>navigation.navigate('dashboard')}><Text style={Styles.dropdown_text}>Dashboard</Text></TouchableOpacity>
                                <TouchableOpacity onPress={()=>navigation.navigate('allCourses')}><Text style={Styles.dropdown_text}>All Courses</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={Styles.dropdown_text}>Current Course</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={Styles.dropdown_text}>Lectures</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={Styles.dropdown_text}>Course Anlyatics</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={Styles.dropdown_text}>Assignments</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={Styles.dropdown_text}>Settings</Text></TouchableOpacity> 
                                <TouchableOpacity><Text style={Styles.dropdown_text}>Announcements</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={Styles.dropdown_text}>Help & Support</Text></TouchableOpacity>
                                <TouchableOpacity onPress={showMenuList}><Text style={Styles.dropdown_text}>Close</Text></TouchableOpacity>
                            </View>
                        </View>
                    )}
                </View>    
            )}
            
            {!searchbarVisible &&(
                <Text>
                    <Text style={[Styles.header, {color: 'blue'}]}>Welcome Back </Text>
                    <Text style={Styles.header}>{username}</Text>
                </Text>
            )}
            <View style={Styles.navbar}>
               {!profileVisible && searchbarVisible ?(
                    <View style={Styles.searchbar}> 
                        <TextInput
                            placeholder='Search Course'
                            style={Styles.searchInput}
                            autoFocus={true}
                            onChangeText={setText}
                            underlineColorAndroid='transparent'
                        ></TextInput>
                        <TouchableOpacity><Icon3 name='search' style={Styles.icons}></Icon3></TouchableOpacity>
                        <TouchableOpacity onPress={showSearchbar}>
                            <Icon name='close' style={Styles.icons}></Icon>
                        </TouchableOpacity>
                    </View>
               ):(
                    <View style={Styles.navbar}>
                        <TouchableOpacity><Icon3 name='search' style={Styles.icons} onPress={showSearchbar}></Icon3></TouchableOpacity>
                        <TouchableOpacity><Icon name='notifications-outline' style={Styles.icons}></Icon></TouchableOpacity>
                        <TouchableOpacity><Icon4 name='user-circle' style={Styles.icons} onPress={showProfile}></Icon4></TouchableOpacity>
                    </View>
                    )}

                    {profileVisible && (
                        <View style={Styles.profile_dropdownlist}>
                            <View style={Styles.dropdown_item}>
                                <TouchableOpacity><Text style={Styles.dropdown_text}>{username}</Text></TouchableOpacity>
                                <TouchableOpacity onPress={()=>navigation.navigate('register')}><Text style={Styles.dropdown_text}>SignUp</Text></TouchableOpacity>
                                <TouchableOpacity onPress={()=>navigation.navigate('login')}><Text style={Styles.dropdown_text}>Logout</Text></TouchableOpacity>
                                <TouchableOpacity onPress={showProfile}><Text style={Styles.dropdown_text}>Close</Text></TouchableOpacity>
                            </View>
                        </View>
                    )}
            </View>
        </View>
    )
};

const Styles =StyleSheet.create({
    navbar:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '10vh',
        padding: 5,
        gap: 10,
    },
    icons:{
        cursor: 'pointer',
        fontSize: 18,
    },
    header:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    searchbar:{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        borderColor: 'gray',
        width: '95vw',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 20,
        padding: 10
    },
    searchInput:{
        height: 20,
        width: '100%',
        padding: 10,
        borderWidth: 0,
        shadowColor: 'transparent',
        elevation: 0
    },
    dropdown:{
        position: 'relative',
    },
    dropdown_list:{
        position: 'absolute',
        backgroundColor: '#f9f9f9',
        top: 30,
        left: 0,
        zIndex: 1,
    },
    profile_dropdownlist:{
        position: 'absolute',
        backgroundColor: '#f9f9f9',
        top: 50,
        right: 0,
        zIndex: 1, 
    },
    dropdown_item:{
        width: '40vw',
        margin: 5,
    },
    dropdown_text:{
        padding: 10,
        color: '#000'
    }
});

export default Navbar;