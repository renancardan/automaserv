import React from 'react';
import { TextInput,  Text, View, StyleSheet, Button, TouchableHighlight, Dimensions } from 'react-native'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'


const { width } = Dimensions.get('window');
export default ({DadoEmp, setMostcar, QuantTotal, VerCar, setModalVisible, VerMenu, setVerMenu, setVerMenu2, FechaCarrinho }) => {
   const MudarModal = ()=>{
      setMostcar(true)
      setModalVisible(true)
    }
    const MudarMenu = ()=>{
      setVerMenu(!VerMenu)
      setVerMenu2(true)
    }
    return (
   
        <View style={styles.Container}>
      <TouchableHighlight  onPress={ MudarMenu} style={styles.Btn}>
        <Ionicons name="menu" size={20} color="#121212"/>
      </TouchableHighlight>

      <View style={styles.Viewcent}>
        <Text style={styles.Txt1}>Localização</Text>

        <View style={styles.ViewCentInt}>
          <Feather name="map-pin" size={14} color="#FF0000" />
          <Text style={styles.Txt2}>{DadoEmp.End_Cidade}-{DadoEmp.End_Estado}</Text>
        </View>
      </View>

      <TouchableHighlight onPress={FechaCarrinho} style={styles.Btn}>
         {VerCar?
        <AntDesign name="closecircleo" size={24} color="#121212" />
         :
         <>
         {QuantTotal > 0 ?
         <>
         <View style={{ marginBottom:-10, marginLeft: -10 ,backgroundColor:"red", width:20, height:20, borderRadius:10, display:"flex", justifyContent:"center", alignItems:"center" }}>
            <Text style={{color:"#FFF"}}>{QuantTotal}</Text>
         </View>
         <AntDesign name="shoppingcart"  size={24} color="red" /> 
         </>

         :
         <>
         <AntDesign name="shoppingcart"  size={24} color="#121212" /> 
         </>

         }
         
         </>
        
         }
     
      </TouchableHighlight >
  </View>
       
       
    );
}

const styles = StyleSheet.create({
    Container:{
      width:"100%",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
     },
     viewCentral:{
      width:"100%",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      marginTop: 38
  
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