import React from 'react';
import { TextInput, StyleSheet } from 'react-native'


export default ({ placeholder, value, onChangeText, password, autoCapitalize, keyboardType}) => {
    const Styles = StyleSheet.create ({
        masked :{
            flex: 1,
            fontSize: 20,
            color: '#000',
            marginLeft: 1,
            outlineStyle: 'none',
            borderColor: "#fff",
            width: 20,
            height:"100%",
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: '0%',
            backgroundColor:"transparent"
        },
      
    });
    return (
     
        
        <TextInput
                keyboardType={"numeric"}
                autoCapitalize={autoCapitalize}
                placeholder={placeholder}
                placeholderTextColor="#999"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
                style = {Styles.masked}
                maxLength={2}
            />
       
    );
}