import React from 'react';
import { TextInput,  Text, View, StyleSheet, Button, TouchableHighlight, Dimensions } from 'react-native'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'

const { width } = Dimensions.get('window');
export default ({Nome, setVerSec}) => {
    
   const MudarSec = ()=>{
      setVerSec([])
    }


    return (
   
 <View style={styles.Container}>
         <Text style={styles.Txt1}>{Nome}</Text>

      <TouchableHighlight onPress={MudarSec}>
        <Text style={{color:"red"}} >Voltar </Text>
      </TouchableHighlight >
  </View>
       
       
    );
}

const styles = StyleSheet.create({
    Container:{
      width:"90%",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      paddingLeft: 10,
      paddingLight: 10,
    
    
     },
   
     Btn:{
        width: "2.5rem",
        height: "2.5rem",
        backgroundColor:"#FFF",
        borderRadius: 9999,
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
     } ,
     
  
    
     Txt1:{
         fontWeight: "bold",
         color:"#000",
         marginTop: "1rem", 
         marginBottom: "1rem",
         alignSelf:"flex-start",
         fontSize:20,
     },
     Txt2:{
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        fontWeight: "700" 
     }

     
  
     
  });