import React from 'react';
import { TextInput,  Text, View, StyleSheet, Button, TouchableHighlight, Image, FlatList } from 'react-native'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'


export default ({ Item, setModalVisible, setItemMod, setMostcar  }) => {
   console.log(Item)

   const MudarModal = ()=>{
      if(Item.Status_Disp === 0) {
         
      } else {
       setMostcar(true)
      setModalVisible(true)
      setItemMod(Item)
      }
    }
   return (
     
            <TouchableHighlight onPress={MudarModal} style={styles.Btn}>
               <>
               {Item.FotoUrl ?
                  <Image
                     source={{ uri: Item.FotoUrl }}  // use uri instead of require
                     style={styles.Img}
                  />
               :
               <Image
               source={require("../assets/semImg.gif")}  // use uri instead of require
               style={styles.Img}
                  />

               }
                {Item.Status_Disp === 0 ?
                  <View  style={{width:80, borderRadius:5, height:20, backgroundColor:"#B0A7A6", marginTop:-20, alignItems:"center", justifyContent:"center"}}> 
                  <Text style={{color:"#FFF", fontWeight:"bold", fontStyle:"italic"}}>Esgotado</Text>
                  </View> 
                   :
                   <>
                   {Item.Statu_Prom === 1 &&
               <View  style={{width:80, borderRadius:5, height:20, backgroundColor:"#CF5B43", marginTop:-20, alignItems:"center", justifyContent:"center"}}> 
               <Text style={{color:"#FFF", fontWeight:"bold", fontStyle:"italic"}}>Promoção</Text>
               </View> 
                  }
                    
                   </>
                  }
                  
                  <Text style={styles.Txt1}>R$ {Item.Preco}</Text>
                  <Text style={styles.Txt2}>{Item.Nome.substring(0, 20)}</Text>
                  <Text style={styles.Txt3}>{Item.Descricao.substring(0, 30)}</Text>
               </>
            </TouchableHighlight>
       
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
   Img:{
     width:"11rem",
     height:"9rem",
     borderRadius:"0.75rem"
  
     },
     Btn:{
      marginRight:10, 
         margin: '1%',
         flexDirection: 'column',
         borderRadius: 10,
         position: 'relative',
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
       color:"green",
       fontWeight:500,
       fontSize:"1.125rem",
       lineHeight:"1.75rem",
     },
     Txt2:{
      marginTop: "0.25rem",
      color:"#000"
     },
     Txt3:{
      color:"#999",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
     }

     
  
     
  });