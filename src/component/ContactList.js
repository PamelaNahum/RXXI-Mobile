import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ModalList from "./Modal";
import { FetchProducto } from "../api/fetch";
import ModalListProduct from "./Modal";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 
import ModalAddProduct from "./ModalAddProduct";

const DATA = [
  {
    id: 1,
    nombre: "carne",
    categoria: "verdura",
    habilitado: true,
  },
  {
    id: 2,
    nombre: "manzana",
    categoria: "fruta",
    habilitado: true,
  },
  {
    id: 3,
    nombre: "naranja",
    categoria: "fruta",
    habilitado: true,
  },
  
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View>
      <Text style={[styles.title, textColor]}>Nombre: {item.nombre}</Text>
      <Text style={[styles.title, textColor]}>Categoria: {item.categoria}</Text>
      <Text style={[styles.title, textColor]}>Stock: {item.stock}</Text>
    </View>
    <Feather
      name="edit"
      size={24}
      color="black"
      style={{ position: "absolute", right: 20, top: "50%" }}
    />
  </TouchableOpacity>
);

const ContactList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [selected, setSelected] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [data, setData] = useState(DATA);

  const [product, setProduct] = useState({
    id: 0,
    nombre: "",
    categoria: "",
    habilitado: true,
    stock: 0,
  });
  const changeProduct = (name, text) => {
    setProduct({ ...product, [name]: text });
  };

  useEffect(() => {
    prueba();
  }, []);

  const prueba = async () => {
    axios
      .get("http://192.168.1.91:8081/api/obtener/productos")
      .then((res) => {
        setData(res.data.sort((a, b) => b.stock - a.stock));
      })
      .catch((err) => console.log("err", err));
  };
  const editProduct = async () => {
    axios
      .post("http://192.168.1.91:8081/api/guardar/producto", {
        id: product.id,
        nombre: product.nombre,
        categoria: product.categoria,
        habilitado: true,
        stock: product.stock,
      })
      .then((res) => {
        prueba();
        setProduct({
          id: 0,
          nombre: "",
          categoria: "",
          habilitado: true,
          stock: 0,
        })
      })
      .catch((err) => console.log("err", err));
  };
  const addProduct = async () => {
    axios
      .post("http://192.168.1.91:8081/api/guardar/producto", {
        nombre: product.nombre,
        categoria: product.categoria,
        habilitado: true,
        stock: product.stock,
      })
      .then((res) => {
        prueba();
        setProduct({
          id: 0,
          nombre: "",
          categoria: "",
          habilitado: true,
          stock: 0,
        })
      })
      .catch((err) => console.log("err", err));
  };

  const renderItem = ({ item }) => {
    var backgroundColor = item.id === selectedId ? "#F05742" : "#ffffff";
    var color = item.id === selectedId ? "white" : "black";
    if (item.stock > 0) {
      backgroundColor = item.id === selectedId ? "#F05742" : "#ffffff";
      color = item.id === selectedId ? "white" : "black";
    } else {
      backgroundColor = item.id === selectedId ? "#F05742" : "#ffffff";
      color = "gray";
    }

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          setModalVisible(true);
          setProduct(item);
        }}
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
      <ModalListProduct
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        valueId={product.id}
        valueName={product.nombre}
        valueCategoria={product.categoria}
        valueStock={product.stock}
        onChangeText={changeProduct}
        onPressEdit={() => editProduct()}
        setProduct={setSelected}
      />

      <ModalAddProduct
        modalVisible={modalAddVisible}
        setModalVisible={setModalAddVisible}
        valueId={product.id}
        valueName={product.nombre}
        valueCategoria={product.categoria}
        valueStock={product.stock}
        onChangeText={changeProduct}
        onPressAdd={() => addProduct()}
        setProduct={setSelected}
      />

      <TouchableOpacity style={styles.plus} onPress={()=>setModalAddVisible(true)} >
      <AntDesign name="plus" size={40} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    height:'100%'
  },
  item: {
    padding: 20,
    width: 350,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: "#F05742",
    borderWidth: 2,
    borderRadius: 30,
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
  },
  plus: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ee6e73",
    position: "absolute",
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default ContactList;
