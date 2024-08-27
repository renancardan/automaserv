import React from 'react';
import { TextInput,  Text, View, StyleSheet, Button, TouchableHighlight, Image, FlatList } from 'react-native'
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'


export default ({ Itens, setModalVisible, setItemMod, setMostcar }) => {
 
   const MudarModal = (item)=>{
      if(item.Status_Disp === 0) {

      } else {
         setMostcar(true)
         setItemMod(item)
         setModalVisible(true)
      }
      
    } 
   return (
      <FlatList
         data={Itens}
         horizontal={true}
         contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16, marginLeft:15,  }}
         showsHorizontalScrollIndicator={false}
         renderItem={({ item }) => (
            <TouchableHighlight onPress={()=>MudarModal(item)} key={item.id} style={styles.Btn}>
               <> 
               
               {item.FotoUrl ?
                  <Image
                     source={{ uri: item.FotoUrl }}  // use uri instead of require
                     style={styles.Img}
                  />
               :
               <Image
               style={styles.Img}
               source={require("../assets/semImg.gif")}
             />

               }
               
               {item.Status_Disp === 0 ?
                  <View  style={{width:80, borderRadius:5, height:20, backgroundColor:"#B0A7A6", marginTop:-20, alignItems:"center", justifyContent:"center"}}> 
                  <Text style={{color:"#FFF", fontWeight:"bold", fontStyle:"italic"}}>Esgotado</Text>
                  </View> 
                   :
                   <>
                   {item.Statu_Prom === 1 &&
               <View  style={{width:80, borderRadius:5, height:20, backgroundColor:"#CF5B43", marginTop:-20, alignItems:"center", justifyContent:"center"}}> 
               <Text style={{color:"#FFF", fontWeight:"bold", fontStyle:"italic"}}>Promoção</Text>
               </View> 

               }
                    
                   </>
                  }

               
               
                  <Text style={styles.Txt1}>{item.Preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                  <Text style={styles.Txt2}>{item.Nome.substring(0, 20)}</Text>
                  <Text style={styles.Txt3}>{item.Descricao.substring(0, 30)}</Text>
               </>
            </TouchableHighlight>
         )}
         keyExtractor={item => item.id.toString()} // add this line to ensure unique keys
      />
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
        flex:1,
        flexDirection:"column",
        borderRadius:"0.75rem",
        position:"relative",
        marginRight:10,
      
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