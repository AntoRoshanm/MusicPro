import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TextInput, Alert} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import { Keyboard } from "react-native";
import {firebase} from "./config"
import { StackActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { auth } from "@react-native-firebase/auth";

const Facebook = ({navigation}) => {
  
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  const handleButtonPress = () => {
    if (!textInput && !password ) {
      Alert.alert('Error', 'Please enter the User name.');
    } else {
      //...
    }
  };
  let textInput = '';
  let Passwordinput =''; 

  const login = async() => {
    handleButtonPress();
    handleLogin();
    addField();
    if (username === password) {
      try {
        // Sign in with Firebase authentication
        await auth().signInWithEmailAndPassword(username, password);
  
        // Navigate to the next page
        handleLogin();
      } catch (error) {
        console.error('Firebase Authentication Error:', error.message);
        Alert.alert('Error', 'Invalid username or password.');
      }
    } else {
      Alert.alert('Error', 'Username and password must be the same.');
    }
  }

  const handleLogin = () => {
      navigation.dispatch(StackActions.replace('Choosesong'))
  }


  const todoRef = firebase.firestore().collection ('MusicPro');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // add a new field
  const addField = () => {
  // check if we have new field data
  if ((username && username.length > 0) && (password && password.length > 0)){
  // get the timestamp
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  const data = {
  username: username,
  password: password,
  createdAt: timestamp,
  };
  todoRef
  .add(data)
  .then(() => {
    setUsername('');
    setPassword('');
      Keyboard.dismiss();
  })
  .catch((error) => {
      alert(error);
  })
  }
  }

  return (
    <View >
      <TouchableOpacity onPress={() => navigation.goBack()} style={backButoon.icons} >
        <Ionicons name="arrow-back" size={40} color="black" />
      </TouchableOpacity>
      <View style={styles.container}  >
      <Image 
      source={require("./Images/logo.png")} 
      style ={styles.image}
      />
       <View style={styles.fbbox} >
        <View style={styles.conInput} >
        <Text style={styles.welcomefont} >Welcome to MusicPro</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the user ID"
          onChangeText={(text) => (textInput = setUsername(text))}
          value={username}
        />
      <View style={styles.passin}>
      <TextInput
        style={styles.input1}
        placeholder="Password"
        secureTextEntry={!isPasswordVisible}
        value={password}
        onChangeText={(text) =>( Passwordinput = setPassword(text))}
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <Icons name={isPasswordVisible ? 'eye-slash' : 'eye'} size={20} style={styles.eye} />
      </TouchableOpacity>
    </View>
        <TouchableOpacity
        style={styles.button}
        onPress={login}
        // () => navigation.navigate('Choosesong') && login 
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Forgottenpass') } >
          <Text style={styles.fortext} >Forgotten Password</Text>
        </TouchableOpacity>
      </View>
        </View>
       </View>
      </View>
    </View>
  )
}

const backButoon = StyleSheet.create({
    icons:{
        marginTop:50,
        marginLeft:20
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },
    image: {
        marginTop:550,
        width: 150,
        height:90,
    },
    fbbox:{
        marginTop:20,
        width:350,
        height:450,
        borderRadius: 30,
        borderColor: 'grey',
        borderWidth: 1,
    },
    conInput:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        marginLeft:20,
        marginTop:-50,
    },
    input: {
        width: 310,
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize:20,
        marginVertical: 30,
        borderRadius: 10,
      },
      input1: {
        width: 310,
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize:20,
        borderRadius: 10,
      },
      eye:{
        marginLeft:-40,
      },
      button: {
        backgroundColor: '#1e90ff',
        padding: 10,
        borderRadius: 5,
        marginVertical: 30,
        alignItems:"center",
        width: 310,
      },
      buttonText: {
        color: 'white',
        fontSize: 20,
      },
      passin: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        paddingVertical: 10,
      },
      welcomefont:{
        fontSize:25,
        marginLeft:30,
        fontWeight: 'bold',
      },
      fortext:{
        fontSize: 18,
        color:"#1e90ff",
        marginLeft: 70,
      }
});

export default Facebook