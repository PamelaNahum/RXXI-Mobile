import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import ModalList from "./Modal";
import { FetchProducto } from "../api/fetch";

const DATA = [
  {
    id: 1,
    nombre: "carne",
    categoria: "verdura",
    habilitado: true
},
{
    id: 2,
    nombre: "manzana",
    categoria: "fruta",
    habilitado: true
},
{
    id: 3,
    nombre: "naranja",
    categoria: "fruta",
    habilitado: true
},
{
    id: 4,
    nombre: "palta",
    categoria: "fruta",
    habilitado: true
},
{
    id: 5,
    nombre: "reineta",
    categoria: "pescado",
    habilitado: true
},
{
    id: 6,
    nombre: "salmon",
    categoria: "pescado",
    habilitado: true
}
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>Nombre: {item.nombre}</Text>
    <Text style={[styles.title, textColor]}>Categoria: {item.categoria}</Text>
  </TouchableOpacity>
);

const ContactList = () => {
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
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <ModalList modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
});

export default ContactList;