import React, { Component, useEffect, useContext, useState  } from 'react'
import { TextInput,  Text, View, StyleSheet, Button, TouchableHighlight, Dimensions } from 'react-native'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'

const { width } = Dimensions.get('window');
export default ({Nome, setVerSec, Item, setPesq, setListPesq}) => {
   const [VejaMais, setVejaMais] = useState(false);
   useEffect(()=>{
    AnalMais() 
   }, []);
   const MudarSec = ()=>{
      setVerSec(Item)
      setListPesq([])
      setPesq("")
    }
    const AnalMais = ()=>{
    
      if(width < 220){
        setVejaMais(false) 
      } else if(width > 220 && width <= 360  ){
         if(Item.Itens.length === 1){
            setVejaMais(false)
         } else {
            setVejaMais(true)
         }
      } else if(width > 360 && width <= 590  ){
         if(Item.Itens.length <= 2){
            setVejaMais(false)
         } else {
            setVejaMais(true)
         }
      }  else if(width > 590 && width <= 790  ){
      if(Item.Itens.length <=3){
         setVejaMais(false)
      } else {
         setVejaMais(true)
      }
   } else if(width > 790 && width <= 990 ){
      if(Item.Itens.length <=4){
         setVejaMais(false)
      } else {
         setVejaMais(true)
      }
   } else if(width > 990 && width <= 1190 ){
      if(Item.Itens.length <=5){
         setVejaMais(false)
      } else {
         setVejaMais(true)
      }
   } else if(width > 1190 && width <= 1390 ){
      if(Item.Itens.length <=6){
         setVejaMais(false)
      } else {
         setVejaMais(true)
      }
   } else if(width > 1390 && width <= 1590 ){
      if(Item.Itens.length <=7){
         setVejaMais(false)
      } else {
         setVejaMais(true)
      }
   } else if(width > 1590 && width <= 1790 ){
      if(Item.Itens.length <=7){
         setVejaMais(false)
      } else {
         setVejaMais(true)
      }
   }
 }


    return (
   
 <View style={styles.Container}>
   <TouchableHighlight onPress={MudarSec}>
         <Text style={styles.Txt1}>{Nome}</Text>
         </TouchableHighlight>
         {VejaMais &&
  
      <TouchableHighlight onPress={MudarSec}>
        <Text >Veja Mais {width < 768 ? ">>":""}</Text>
      </TouchableHighlight >
      }
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
      marginLeft:15,
      marginTop:20,
    
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