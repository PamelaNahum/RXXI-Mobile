import React, { useState, useEffect} from "react";
import axios from 'axios';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, } from "react-native";
import ModalList from "./Modal";
import { FetchProducto } from "../api/fetch";
import ModalListProduct from "./Modal";

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
    <Text style={[styles.title, textColor]}>Habilitado: {item.habilitado}</Text>
    <Text style={[styles.title, textColor]}>Stock: {item.stock}</Text>
  </TouchableOpacity>
);

const ContactList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [selected, setSelected] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData]=useState(DATA);

  useEffect(()=>{
    prueba();
},[])

  const prueba = async()=>{
    axios.get('http://192.168.1.91:8081/api/obtener/productos')
			.then(res => {console.log(res.data); setData(res.data) })
			.catch(err => console.log('err', err));
  
  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#F05742" : "#ffffff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {prueba(); setSelectedId(item.id); setModalVisible(true);console.log(item); setSelected(item) }}
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
      <ModalListProduct modalVisible={modalVisible} setModalVisible={setModalVisible} producto={selected} setProduct={setSelected}/>
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