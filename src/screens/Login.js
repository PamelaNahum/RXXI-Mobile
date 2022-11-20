import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EditContact from '../component/EditContact';
import ContactListStock from '../component/ContactListStock';
import LoginForm from '../component/LoginForm';


const Login = () => {
    
    return (
        <View style={styles.container}>
          <LoginForm/>
          <StatusBar style="auto" />
        </View>
      );
  };
  
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
