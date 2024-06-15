import { StyleSheet, Text, View, ScrollView , Image, Button, TouchableOpacity} from 'react-native'
import React ,  { useState, useEffect }  from 'react'
import { StackActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Choosesong = ({navigation}) => {

  const [showFirstView, setShowFirstView] = useState(true);
  const [showSecondView, setShowSecondView] = useState(false);

  const [iconVisible, setIconVisible] = useState(false);
  const [iconVisible1, setIconVisible1] = useState(false);
  const [iconVisible2, setIconVisible2] = useState(false);
  const [iconVisible3, setIconVisible3] = useState(false);
  const [iconVisible4, setIconVisible4] = useState(false);
  const [iconVisible5, setIconVisible5] = useState(false);
  const [iconVisible6, setIconVisible6] = useState(false);
  const [iconVisible7, setIconVisible7] = useState(false);
  const [iconVisible9, setIconVisible9] = useState(false);
  const [iconVisible8, setIconVisible8] = useState(false);


  const handlePress = () => {
    setIconVisible(!iconVisible);
  };
  const handlePress1 = () => {
    setIconVisible1(!iconVisible1);
  };
  const handlePress2 = () => {
    setIconVisible2(!iconVisible2);
  };
  const handlePress3 = () => {
    setIconVisible3(!iconVisible3);
  };
  const handlePress4 = () => {
    setIconVisible4(!iconVisible4);
  };
  const handlePress5 = () => {
    setIconVisible5(!iconVisible5);
  };
  const handlePress6 = () => {
    setIconVisible6(!iconVisible6);
  };
  const handlePress7 = () => {
    setIconVisible7(!iconVisible7);
  };
  const handlePress8 = () => {
    setIconVisible8(!iconVisible8);
  };
  const handlePress9 = () => {
    setIconVisible9(!iconVisible9);
  };


  return (
    <View style={styles.container} >
      <Text style={styles.whattext} >Which songs are you fond of?</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent} >
        <TouchableOpacity onPress={handlePress} >
        <View style={styles.boxes1} >
          <Text style={styles.lantext} >International</Text>
          <Image 
           source={require("./Images/internationalsinger.png")} 
           style={styles.internationasinger}
          />
          {iconVisible && (
            <Ionicons name="checkmark-circle" size={35} color="white" style={styles.staricon} />
          )}
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress1}>
        <View style={styles.boxes2} >
          <Text style={styles.lantext} >Tamil</Text>
          <Image 
           source={require("./Images/tamil.png")} 
           style={styles.tamil}
          />
          {iconVisible1 && (
            <Ionicons name="checkmark-circle" size={35} color="white" style={styles.staricon} />
          )}
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress2}>
        <View style={styles.boxes3} >
         <Text style={styles.lantext} >Malayalam</Text>
         <Image 
           source={require("./Images/malayalam.png")} 
           style={styles.malayalam}
          />
          {iconVisible2 && (
            <Ionicons name="checkmark-circle" size={35} color="white" style={styles.staricon} />
          )}
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress3}>
        <View style={styles.boxes4} >
        <Text style={styles.lantext} >Hindi</Text>
        <Image 
           source={require("./Images/hindi.png")} 
           style={styles.hindi}
          />
          {iconVisible3 && (
            <Ionicons name="checkmark-circle" size={35} color="white" style={styles.staricon} />
          )}
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress4}>
        <View style={styles.boxes5} >
        <Text style={styles.lantext} >Telugu</Text>
        <Image 
           source={require("./Images/telugu.png")} 
           style={styles.telugu}
          />
          {iconVisible4 && (
            <Ionicons name="checkmark-circle" size={35} color="white" style={styles.staricon} />
          )}
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress5}>
        <View style={styles.boxes6} >
        <Text style={styles.lantext} >Punjabi</Text>
        <Image 
           source={require("./Images/punjabi.png")} 
           style={styles.punjabi}
          />
          {iconVisible5 && (
            <Ionicons name="checkmark-circle" size={35} color="white" style={styles.staricon} />
          )}
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress6}>
        <View style={styles.boxes7} >
        <Text style={styles.lantext} >Marathi</Text>
        <Image 
           source={require("./Images/marathi.png")} 
           style={styles.marathi}
          />
          {iconVisible6 && (
            <Ionicons name="checkmark-circle" size={35} color="white" style={styles.staricon} />
          )}
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress7}>
        <View style={styles.boxes8} >
        <Text style={styles.lantext} >Gujarati</Text>
        <Image 
           source={require("./Images/gurajat.png")} 
           style={styles.gujarat}
          />
          {iconVisible7 && (
            <Ionicons name="checkmark-circle" size={35} color="white" style={styles.staricon} />
          )}
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress8}>
        <View style={styles.boxes9} >
        <Text style={styles.lantext} >Kannada</Text>
        <Image 
           source={require("./Images/kannada.png")} 
           style={styles.kannada}
          />
          {iconVisible8 && (
            <Ionicons name="checkmark-circle" size={35} color="white" style={styles.staricon} />
          )}
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress9}>
        <View style={styles.boxes10} >
        <Text style={styles.lantext} >Bengali</Text>
        <Image 
           source={require("./Images/bengali.png")} 
           style={styles.bengali}
          />
          {iconVisible9 && (
            <Ionicons name="checkmark-circle" size={35} color="white" style={styles.staricon} />
          )}
        </View>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.viewtran} >
      <TouchableOpacity style={styles.nextbtn} onPress={() =>   navigation.dispatch(StackActions.replace('MainPages'))} >
          <Text style={styles.nexttext} >Next</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1,
    },
    whattext:{
      color:"white",
      fontSize:27,
      fontWeight: 'bold',
      marginTop: 50,
      marginLeft:20,
      marginVertical:10,
    },
    boxes1:{
      width:340,
      height:120,
      backgroundColor:"#ffa500",
      borderRadius:15,
      marginVertical:10,
    },
    lantext:{
      color:"white",
      fontSize:24,
      fontWeight:"bold",
      marginTop:10,
      marginLeft:20,
    },
    internationasinger:{
      width:140,
      height:130,
      marginLeft:200,
      marginTop: -50,
    },
    tamil:{
      width:90,
      height:120,
      marginLeft:220,
      marginTop: -40,
    },
    malayalam:{
      width:100,
      height:120,
      marginLeft:220,
      marginTop: -40,
    },
    hindi:{
      width:90,
      height:120,
      marginLeft:220,
      marginTop: -42,
    },
    telugu:{
      width:120,
      height:120,
      marginLeft:220,
      marginTop: -42,
    },
    punjabi:{
      width:120,
      height:110,
      marginLeft:220,
      marginTop: -32,
    },
    boxes2:{
      width:340,
      height:120,
      backgroundColor:"#FEBA4F",
      borderRadius:15,
      marginVertical:10,
    },
    boxes3:{
      width:340,
      height:120,
      backgroundColor:"#B2D3C2",
      borderRadius:15,
      marginVertical:10,

    },
    boxes4:{
      width:340,
      height:120,
      backgroundColor:"#D21404",
      borderRadius:15,
      marginVertical:10,

    },
    boxes5:{
      width:340,
      height:120,
      backgroundColor:"#03C04A",
      borderRadius:15,
      marginVertical:10,

    },
    boxes6:{
      width:340,
      height:120,
      backgroundColor:"#710193",
      borderRadius:15,
      marginVertical:10,
    },
    boxes7:{
      width:340,
      height:120,
      backgroundColor:"pink",
      borderRadius:15,
      marginVertical:10,
    },
    marathi:{
      width:130,
      height:110,
      marginLeft:210,
      marginTop: -32,
    },
    boxes8:{
      width:340,
      height:120,
      backgroundColor:"blue",
      borderRadius:15,
      marginVertical:10,
    },
    gujarat:{
      width:150,
      height:150,
      marginLeft:190,
      marginTop: -72,
    },
    boxes9:{
      width:340,
      height:120,
      backgroundColor:"#FD5DA8",
      borderRadius:15,
      marginVertical:10,
    },
    kannada:{
      width:140,
      height:120,
      marginLeft:200,
      marginTop: -42,
    },
    scrollViewContent: {
      alignItems: 'center',
      marginTop:30,
    },
    nextbtn:{
      backgroundColor:"white",
      width: 100,
      height:50,
      justifyContent: "center",
      borderRadius:30,
      position: 'fixed',
      marginBottom: 0,
      left: 0,
      right: 0,
      margin: 10,
      alignItems: 'center',
      marginLeft: 145,
      marginTop:-80,
    },
    nexttext:{
      fontSize:24,
      marginTop:-1,
      fontWeight:"bold",
    },
    bengali:{
      width:120,
      height:115,
      marginLeft:200,
      marginTop: -32,
    },
    boxes10:{
      width:340,
      height:120,
      backgroundColor:"#2277AA",
      borderRadius:15,
      marginVertical:10,
      marginBottom:50,
    },
    staricon:{
      marginTop:-120,
      marginLeft:300,
    },

});

export default Choosesong

