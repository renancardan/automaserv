import React from 'react';
import { TextInput,  Text, View, StyleSheet, Button, TouchableHighlight, Dimensions, ScrollView } from 'react-native'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'


const { width } = Dimensions.get('window');
export default ({ VerMenu2, VerMenu, setVerMenu, FechaMenu, Cat, MudarSec, }) => {
   
    return (
       <View  style={styles.Container} >
       <ScrollView
       horizontal={true}
       showsHorizontalScrollIndicator={false}
        >
          {Cat.map((item, key)=>(
                      <>
         <TouchableHighlight  onPress={()=>MudarSec(item)} style={styles.Btn}>
         <Text style={styles.Txt2}>{item.Secao}</Text>
         </TouchableHighlight> 
                      </>
                      ))}
    
   
  </ScrollView>
  </View>
       
    );
}

const styles = StyleSheet.create({
    Container:{
      width:"100%",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"flex-start",
      borderTopWidth:1,
      borderTopStyle:"solid",
      borderTopColor:"#ccc",
      borderBottomWidth:1,
      borderBottomStyle:"solid",
      borderBottomColor:"#ccc",
      marginTop:20
      
     },
     viewCentral:{
      width:"100%",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      marginTop: 38
  
     },
     Btn:{
        height: "2.5rem",
        backgroundColor:"#FFF",
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        marginLeft:20,
        marginRight:20
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
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        fontWeight: "700" 
     }

     
  
     
  });