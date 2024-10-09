import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/FontAwesome';

const Searchbar = ({navigation, route})=>{

    const [searchbarVisible, setSearchbarVisible]=useState(false);
    const [profileVisible, setProfileVisible]=useState(false);
    const [text, setText]=useState('');
    const [username, setUsername]=useState('');

    const showSearchbar = ()=>{
        setSearchbarVisible(!searchbarVisible);
        setProfileVisible(false);
    }

    const showProfile = ()=>{
        setProfileVisible(!profileVisible);
        setSearchbarVisible(false);
    }

    const handleSignup = ()=>{
        navigation.navigate('register');
    }

    const handleLogout = ()=>{
        navigation.navigate('login');
    }

    return(
        <View style={Styles.navbar}>
            {!searchbarVisible &&(
                <TouchableOpacity><Icon2 name='menu' style={Styles.icons}></Icon2></TouchableOpacity>
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
                <View>
                    {profileVisible ?(
                        <View>
                            <TouchableOpacity><Text>{username}</Text></TouchableOpacity>
                            <TouchableOpacity><Text>My Profile</Text></TouchableOpacity>
                            <TouchableOpacity onPress={handleSignup}><Text>SignUp</Text></TouchableOpacity>
                            <TouchableOpacity onPress={handleLogout}><Text>Logunt</Text></TouchableOpacity>
                            <TouchableOpacity onPress={showProfile}><Text>Close</Text></TouchableOpacity>
                        </View>
                    ):(
                        <View style={Styles.navbar}>
                            <TouchableOpacity><Icon3 name='search' style={Styles.icons} onPress={showSearchbar}></Icon3></TouchableOpacity>
                            <TouchableOpacity><Icon name='notifications-outline' style={Styles.icons}></Icon></TouchableOpacity>
                            <TouchableOpacity><Icon4 name='user-circle' style={Styles.icons} onPress={showProfile}></Icon4></TouchableOpacity>
                        </View>
                    )}
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
        fontSize: 16,
        fontWeight: 'bold'
    },
    searchbar:{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        borderColor: 'gray',
        width: '80vw',
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
    }
});

export default Searchbar;