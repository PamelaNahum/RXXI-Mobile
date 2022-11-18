import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Pressable, View, TextInput } from "react-native";
import ModalList from "./Modal";
import { FetchProducto } from "../api/fetch";

const DATA = [
  {
    id: 1,
    cantidad: 5,
    precio: 2000,
    producto_id: 1,
    habilitado: true
},
{
    id: 2,
    cantidad: 2,
    precio: 2000,
    producto_id: 2,
    habilitado: true
},
{
    id: 3,
    cantidad: 5,
    precio: 2000,
    producto_id: 3,
    habilitado: true
}
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>Producto: {item.producto_id}</Text>
    <Text style={[styles.title, textColor]}>Cantidad: {item.cantidad}</Text>
    <Text style={[styles.title, textColor]}>Precio: {item.precio}</Text>
  </TouchableOpacity>
);

const ContactListStock = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const prueba = async()=>{
    await FetchProducto()
  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#F05742" : "#ffffff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {prueba(); setSelectedId(item.id); setModalVisible(true); }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginLeft:10, marginRight:10}}>
      <Text style={{marginTop:'40%'}}>Ingresar solicitud a proveedor</Text>
            <TextInput
        style={styles.input}
        placeholder="Producto"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        placeholder="Cantidad"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        keyboardType="numeric"
      />
      <Pressable
              style={[styles.button, styles.buttonClose]}
            >
              <Text style={styles.textStyle}>Ingresar</Text>
            </Pressable>
            </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius:30,
    width:'90%',
    height:'70%',
    alignContent:'center',
    display:'flex',
  },
  item: {
    padding: 20,
    width:350,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor:"#F05742",
    borderWidth:2,
    borderRadius:30
  },
  title: {
    fontSize: 16,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

});

export default ContactListStock;