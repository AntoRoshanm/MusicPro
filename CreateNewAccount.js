import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TextInput, Alert} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useState} from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import { Keyboard } from "react-native";
import {firebase} from "./config"


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
  let numberInput ='';

  const login = () => {
    handleButtonPress();
    // handleLogin();
    addField();
    handleLogin();
  }

  const handleLogin = () => {
    navigation.navigate('Choosesong');
  }

  const todoRef = firebase.firestore().collection ('MusicPro');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');

  // add a new field
  const addField = () => {
  // check if we have new field data
  if ((username && username.length > 0) && (password && password.length > 0) && (number && number.length > 0) ){
  // get the timestamp
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  const data = {
  username: username,
  password: password,
  number:number,
  createdAt: timestamp,
  };
  todoRef
  .add(data)
  .then(() => {
    setUsername('');
    setPassword('');
    setNumber();
      Keyboard.dismiss();
  })
  .catch((error) => {
      alert(error);
  })
  }
  }

  handleMobileNumberChange = (text) => {
    text = text.replace(/[^0-9]/g, '').slice(0, 10);
  }
  

  return (
    <View >
      <TouchableOpacity onPress={() => navigation.goBack()} style={backButoon.icons} >
        <Icon name="ios-arrow-back" size={40} color="black" />
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
        placeholder="Enter your Mobile Number"
        keyboardType="numeric"
        value={number}
        onChangeText={(text) => (numberInput = setNumber(text)) && this.handleMobileNumberChange}
      />
    </View>
    <View style={styles.passin}>
      <TextInput
        style={styles.input1}
        placeholder="Confirm Password"
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
      >
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
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
        marginTop:20,
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
});

export default Facebook