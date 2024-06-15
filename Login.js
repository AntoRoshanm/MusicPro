import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ScreenA({navigation}) {
  return (
    <View style={styles.container} >
      <Image 
      source={require("./Images/logo.png")} 
      style ={styles.image}
      />
      <Text style={styles.welcometext} >Welcome to MusicPro</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Facebook')} >
          <Icon name="user" size={27} color="white" marginLeft={20} />
          <Text style={styles.buttonText} >Sign in MusicPro</Text>
        </TouchableOpacity>

        <Text style={styles.ortext} >or</Text>
  
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateNewPage')} >
        <Icon name="user-plus" size={27} color="white" marginLeft={20}/>
          <Text style={styles.buttonText}>Create new account</Text>
        </TouchableOpacity>
  
        <Text style={styles.helpText} >Help?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"black"
    },
    image: {
      width: 200,
      height: 200, 
      borderRadius:100,
    },
    welcometext: {
        color:"white",
        fontSize:36
    },
    button: {
        marginTop:20,
        padding: 10,
        margin: 20,
        borderRadius: 30,
        borderColor: 'grey',
        borderWidth: 1,
        width:300,
        height:50,
      },
      buttonText: {
        color: 'white',
        marginLeft:70,
        marginTop:-29,
        fontSize:19,
      },
      helpText:{
        color:"white",
      },
      ortext:{
        color:"white",
        fontSize:20,
      },
      manicon:{
        fontSize:20,
        marginLeft:20,
        color:"white",
      }
  });

export default ScreenA;


   