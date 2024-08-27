import React from 'react';
import { TextInput,  Text, View, StyleSheet, Button, TouchableHighlight, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Platform } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

export default ({setModalVisible, VerTotal, VerCar2, VerCar, setVerCar, FechaCarrinho, Cat, MudarSec,  }) => {
 
    return (
      <> 
       {VerCar2 &&
          <>
          {VerCar && (
            <>
                <Animatable.View
                  animation="bounceInLeft"
                  duration={1000}
                  style={styles.Menus}
                  onAnimationEnd={() => {
                    if (!VerCar) {
                      setVerCar(false);
                    }
                  }}
                >
                  
                  <View style={styles.CaixaPrin}>
                  <View style={styles.menuText}> 
                    <Text style={styles.menuItem}>Total</Text>
                    <Text style={styles.menuItem1}>R$ {VerTotal}</Text>
                    </View>
                 
                 <TouchableOpacity onPress={()=>setModalVisible(true)} style={styles.Btn}>
                 <Text style={styles.menuItem2}>Ver Carrinho</Text>
                </TouchableOpacity>
                </View>
                </Animatable.View>
               
                </>
              )}
              
              {!VerCar && (
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
    width: 150,
    position: 'absolute',
    top:80,
    right:5,
    height: 150,
    backgroundColor: "#FFF",
    zIndex: 2,
    // Sombras para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Sombras para Android
    elevation: 5,
    // borderTopWidth: 2,
    // borderTopColor: 'black',
    // borderTopStyle: 'solid',
    borderRadius:10,
   },
  
   menuText: {
    width: '50%',
    height:"50%",
 

    alignItems: 'center',
    fontFamily:"arial",
    justifyContent:"center",
    marginBottom:10,
  },
  CaixaPrin: {
    width:"100%",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    
    
  },
  menuItem: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    fontFamily:"arial"
  },
  Btn: {
     backgroundColor:"#0c9139",
     width: 100,
     height: 40,
     justifyContent:"center",
     alignItems:"center",
     borderRadius:5,
    
  },
  menuItem1: {
    fontSize: 20,
    marginBottom:2,
    textAlign: 'center',
    fontFamily:"arial",
    fontWeight:"bold",
  },
  menuItem2: {
    fontSize: 15,
     color:"#FFF",
    textAlign: 'center',
    fontFamily:"arial",
    fontWeight:"bold",
  },
   
});
