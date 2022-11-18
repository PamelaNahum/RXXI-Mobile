import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import ModalList from "./Modal";
import { FetchProducto } from "../api/fetch";
import ModalListRecipe from "./ModalRecipe";

const DATA = [
  {
    id: 1,
    nombre: "ceviche",
    detalle: "ceviche, cebolla morada, pimentón, limón",
    categoria: "entradas",
    precio: 5000
},
{
    id: 2,
    nombre: "porotos granados",
    detalle: "poroto, tomate, choclo",
    categoria: "fondo",
    precio: 8000
}
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>Nombre: {item.nombre}</Text>
    <Text style={[styles.title, textColor]}>Categoria: {item.categoria}</Text>
    <Text style={[styles.title, textColor]}>Detalle: {item.detalle}</Text>
  </TouchableOpacity>
);

const ContactListReceta = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [data,setData]= useState(DATA);

  useEffect(()=>{
    prueba();
},[])

  const prueba = async()=>{
    axios.get('http://192.168.1.91:8081/api/obtener/receta')
			.then(res => {console.log(res.data); setData(res.data) })
			.catch(err => console.log('err', err));
  
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
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <ModalListRecipe modalVisible={modalVisible} setModalVisible={setModalVisible}/>
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

export default ContactListReceta;