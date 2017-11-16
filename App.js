import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common/';
import LoginForm from './src/components/LoginForm';


class App extends Component {
  
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCyNj-30bATPi_RZCqgHJSb2NfLSXNrcE8',
      authDomain: 'fire-base-auth-react-native.firebaseapp.com',
      databaseURL: 'https://fire-base-auth-react-native.firebaseio.com',
      projectId: 'fire-base-auth-react-native',
      storageBucket: 'fire-base-auth-react-native.appspot.com',
      messagingSenderId: '604861934881'
    };
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <View>
          <Header title={'Firebase Auth'} />  
          <LoginForm />
      </View>
  );
  }
}

export default App;

// Initialize Firebase

