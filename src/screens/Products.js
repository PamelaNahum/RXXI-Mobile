import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EditContact from '../component/EditContact';
import ContactList from '../component/ContactList';


const Products = () => {
    
    return (
        <View style={styles.container}>
          <ContactList/>
          <StatusBar style="auto" />
        </View>
      );
  };
  
export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
