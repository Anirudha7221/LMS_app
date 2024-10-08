import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Searchbar = ()=>{
    return(
        <View>
            <TextInput 
                style={Styles.searchbar}
                placeholder='Search Courses'
            />
        </View>
    )
};

const Styles =StyleSheet.create({
    searchbar:{
        borderRadius: 10,
        padding: 12
    }
});

export default Searchbar;