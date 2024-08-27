import React, { useState } from 'react';
import { TextInput,  Text, View, StyleSheet, Button, TouchableHighlight } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'
import Campo from './CampoPes';


export default ({setPesquisa, Pesquisa}) => {

    return (
   
        <View style={styles.Container}>
      
          <Feather name='search' size={24} color="#64748b"/>
          <Campo        
            placeholder="Pesquise por Itens..." 
            value={Pesquisa}
            onChangeText={t=>setPesquisa(t)}
            autoCapitalize="none"
            keyboardType={"default"}
            posi={18}
            multiline={true} // Permite várias linhas
            numberOfLines={3} // Exibe três linhas
               />
         </View>
       
       
    );
}

const styles = StyleSheet.create({
    Container:{
      width:300,
      display:"flex",
      flexDirection:"row",
      borderWidth: 1,
      borderColor:"#999",
      borderRadius: 9999,
      alignItems:"center",
      gap:"0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      backgroundColor: "transparent",
      height: "3.5rem",
     },
   

  
     
  });