//import ReactNative from 'react-native'; == es5 kebawah
import { Text, View } from 'react-native'; 
//de-structuring, mempersingkat penulisan supaya (bg2) tidak ditulis lagi
import React from 'react';
//const Text = ReactNative.Text; (bg2)
//import App from './../../App.js'; .. <- back 1 kali
//import axios from 'axios';

const Header = (props) => {
    const { viewStyle, textStyle } = styles; 
    //de-structuring supaya ga nulis styles.view,...

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
};

/*
const textStyle = {
    color: 'red',
    fontSize: 20,
    padding: 10
};

const viewStyle = {
    backgroundColor: 'blue'
};
*/
//bisa dipersingkat dengan membuat objek:

const styles = {
    textStyle: {
        color: 'white',
        fontSize: 20,
        padding: 10
    },
    
    viewStyle: {
        backgroundColor: 'blue',
        alignItems: 'center',
        elevation: 5
    }
};
export { Header };