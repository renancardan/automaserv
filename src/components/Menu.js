import React from 'react';
import { TextInput,  Text, View, StyleSheet, Button, TouchableHighlight, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';
import AntDesign from '@expo/vector-icons/AntDesign';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

export default ({VerMenu2, VerMenu, setVerMenu, FechaMenu, Cat, MudarSec,  }) => {

    return (
      <> 
       {VerMenu2 &&
          <>
          {VerMenu && (
            <>
                <Animatable.View
                  animation="bounceInLeft"
                  duration={1000}
                  style={styles.Menus}
                  onAnimationEnd={() => {
                    if (!VerMenu) {
                      setVerMenu(false);
                    }
                  }}
                >
                  
                  <View style={styles.menuText}>

                  <TouchableOpacity onPress={FechaMenu} style={styles.menuItem}>
                  <AntDesign name="closecircleo" size={24} color="black" />
                  </TouchableOpacity>

                  <Text style={styles.menuItem1}>Seções</Text>
                  {/*  */}
                  {Cat.map((item, key)=>(
                      <>
                  <TouchableOpacity onPress={()=>MudarSec(item)} style={{marginTop:10, borderTopColor:"#ccc", borderTopWidth:2, borderTopStyle:"solid"}} >
                    <>
                  <Text style={styles.menuItem}>{item.Secao}</Text>  
                  <Text style={{color:"#ccc", fontSize:15, textAlign:"center"}}>{item.Itens.length} Produto{item.Itens.length > 1? "s":""}</Text>  
                    </>
                  
                    </TouchableOpacity> 
                      
                      </>
                      ))}
               
                 
                </View>
                </Animatable.View>
                <TouchableOpacity onPress={FechaMenu}  style={styles.MenusFund}></TouchableOpacity>
                </>
              )}
              
              {!VerMenu && (
                <>
                <Animatable.View
                  animation="bounceOutLeft"
                  duration={1000}
                  style={styles.Menus}
                >
                  
                </Animatable.View>
                
                 </>
              )}
          
          </>

          }
        
      </>
      
    );
}

const styles = StyleSheet.create({
  Menus:{
    width:200,
    position: 'absolute',
    top:0,
    left: 0,
    right: 10,
    height: "100%",
    backgroundColor: "#FFF",
    zIndex: 2,
     
   },
   MenusFund:{
    width:"100%",
    position: 'absolute',
    top:0,
    left: 0,
    right: 10,
    height: "100%",
    opacity: 0.5,
    backgroundColor: "#000",
    zIndex: 1,
     
   },
   menuText: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    fontFamily:"arial"
    
  },
  LinhaTop: {
    width: '50%',
   
    borderTopWidth: 2,
    borderTopColor: 'black',
    borderTopStyle: 'solid',
  },
  menuItem: {
    fontSize: 18,
    fontFamily:"arial"
  },
  menuItem1: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    fontFamily:"arial",
    fontWeight:"bold",
  },
   
});
