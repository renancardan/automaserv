import React from 'react';
import {Linking, Image, TextInput,  Text, View, StyleSheet, Button, TouchableHighlight, Dimensions, ScrollView } from 'react-native'
import { Ionicons, Feather, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;
export default ({DadoEmp }) => {
   const LinkINsta = () => {
      Linking.openURL(DadoEmp.Rede_Insta);
    };
    const LinkWhats = () => {
      Linking.openURL(`https://wa.me/${DadoEmp.Rede_Whats}?text=Olá`);
    };
    return (
       <View  style={styles.Container} >
         <View  style={{flexDirection:"row", display:"flex"}}>
            {DadoEmp.Img_logoUrl ?
            <Animatable.Image
            animation="bounceIn"
            duration={10000}
            style={styles.img1}
            source={{ uri: DadoEmp.Img_logoUrl }}
           
            />

            :
            <Animatable.Image
            animation="bounceIn"
            duration={10000}
            style={styles.img1}
            source={require("../assets/semImg.png")}
          /> 

            }
           
          <View style={{ display:"flex", alignItems:"flex-start"}}>        
         <TouchableHighlight style={styles.Btn}>
         <Text style={styles.Txt2}>{DadoEmp.NomeEmp}</Text>
         </TouchableHighlight>
         {DadoEmp.Rec_ValorEnt &&
            <View style={{  opacity:0.5 ,backgroundColor:"#b4b8be", paddingLeft:10, paddingRight:10, paddingBottom:5, paddingTop:5, borderRadius:5}}>
         <Text style={{fontWeight:"bold", fontSize:10}}>
         Valor da Entrega {DadoEmp.Rec_ValorEnt.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
              </View>
         } 
         
         
         </View>  
         </View>            
      <View  style={{flexDirection:"row", display:"flex",  marginTop:-75, marginRight:20}}>
      <TouchableHighlight onPress={()=>LinkWhats()} style={styles.Btn1}>
      <FontAwesome5 name="whatsapp" size={24} color="black" />
         </TouchableHighlight>  
         <TouchableHighlight onPress={()=>LinkINsta()} style={styles.Btn1}>
      <Entypo name="instagram" size={24} color="black" />
         </TouchableHighlight>  
      </View>        
    
   
  
          </View>
       
    );
}

const styles = StyleSheet.create({
   img1: {
      width: isTablet ? 100 : 75,
      height: isTablet ? 100 : 75,
     marginTop:-100,
     marginRight:10
    
   },
    Container:{
      width:"100%",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginTop:20,
      marginBottom:20,
      marginLeft:20,
    
     },
     viewCentral:{
      width:"100%",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      marginTop: 38
  
     },
     Btn:{
        height: "2.5rem",
        
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        marginTop:-40
     } ,
     Btn1:{
      marginTop:10,
      marginLeft:10
   } ,
     
     Viewcent:{
        flexDirection: "column",
        display:"flex",
        alignItems:"center",
        justifyContent: "center",
     },
     ViewCentInt:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "center",
        gap: "0.25rem",
     },
     Txt1:{
        textAlign: "center",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        color:"#000"
     },
     Txt2:{
        fontSize: 20,
        lineHeight: "1.75rem",
        fontWeight: "700" 
     }

     
  
     
  });