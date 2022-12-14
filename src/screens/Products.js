import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EditContact from '../component/EditContact';
import ContactListReceta from '../component/ContactListReceta';


const Products = () => {
    
    return (
        <View style={styles.container}>
          <ContactListReceta/>
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
