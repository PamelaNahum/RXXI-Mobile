import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EditContact from '../component/EditContact';
import ContactListStock from '../component/ContactListStock';


const Stock = () => {
    
    return (
        <View style={styles.container}>
          <ContactListStock/>
          <StatusBar style="auto" />
        </View>
      );
  };
  
export default Stock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
