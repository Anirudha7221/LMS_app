import React from "react";
import { View, Text, StyleSheet} from "react-native";

const Home = () =>{
    return(
        <View>
            <Text style={styles.header}>Welcome to Home page</Text>
        </View>
    ) 
};

const styles = StyleSheet.create({
    header:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Home;