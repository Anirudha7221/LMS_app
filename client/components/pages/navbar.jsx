import React, { useEffect, useState, useRef } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable, Dimensions, Animated} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');

const Navbar = ()=>{

    const navigation = useNavigation();
    const slideEffect = useRef(new Animated.Value(-width)).current;

    const [searchbarVisible, setSearchbarVisible]=useState(false);
    const [profileVisible, setProfileVisible]=useState(false);
    const [menulistVisible, setMenulistVisible]=useState(false);
    const [text, setText]=useState('');
    const [username, setUsername]=useState('User');

    useEffect(()=>{
        if(menulistVisible){
            Animated.timing(slideEffect,{
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start();
        }
        else{
            Animated.timing(slideEffect,{
                toValue: -width,
                duration: 300,
                useNativeDriver: true
            }).start();
        }
    },[menulistVisible])

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
                    <TouchableOpacity style={Styles.overlay} onPress={showMenuList} activeOpacity={1}>
                        <Icon2 name='menu' style={Styles.icons}></Icon2>
                    </TouchableOpacity>
                    { menulistVisible && (
                        <Animated.View style={[Styles.dropdown_list, {transform: [{translateX: slideEffect}]}]}>
                            <View style={Styles.dropdown_item}>
                                <TouchableOpacity onPress={()=>navigation.navigate('dashboard')}><Text style={Styles.dropdown_text}>Dashboard</Text></TouchableOpacity>
                                <TouchableOpacity onPress={()=>navigation.navigate('allCourses')}><Text style={Styles.dropdown_text}>All Courses</Text></TouchableOpacity>
                                <TouchableOpacity onPress={()=>navigation.navigate('newCourses')}><Text style={Styles.dropdown_text}>New Course</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={Styles.dropdown_text}>Lectures</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={Styles.dropdown_text}>Course Anlyatics</Text></TouchableOpacity>
                                <TouchableOpacity onPress={()=>navigation.navigate('assignment')}><Text style={Styles.dropdown_text}>Assignments</Text></TouchableOpacity>
                                <TouchableOpacity onPress={()=>navigation.navigate('settings')}><Text style={Styles.dropdown_text}>Settings</Text></TouchableOpacity> 
                                <TouchableOpacity onPress={()=>navigation.navigate('annoucement')}><Text style={Styles.dropdown_text}>Announcements</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={Styles.dropdown_text}>Help & Support</Text></TouchableOpacity>
                                <TouchableOpacity onPress={showMenuList}><Text style={Styles.dropdown_text}>Close</Text></TouchableOpacity>
                            </View>
                        </Animated.View>
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
        height: '7vh',
        gap: 10,
        padding: 5,
        zIndex: 10,
    },
    overlay:{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        top: -10,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1
    },   
    icons:{
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
        zIndex: 1
    },
    dropdown_list:{
        position: 'absolute',
        backgroundColor: '#f9f9f9',
        top: 20,
        left: 0,
    },  
    profile_dropdownlist:{
        position: 'absolute',
        backgroundColor: '#f9f9f9',
        top: 20,
        right: 0,
        zIndex: 1, 
    },
    dropdown_item:{
        width: '120%',
        height: '200%',
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        zIndex: 2,
    },
    dropdown_text:{
        padding: 10,
        color: '#000',
        cursor: 'pointer'
    }
});

export default Navbar;