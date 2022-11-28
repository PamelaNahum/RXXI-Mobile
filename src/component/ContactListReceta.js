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
import ModalListRecipe from "./ModalRecipe";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import ModalAddRecipe from "./ModalAddRecipe";

const DATA = [
  {
    id: 1,
    nombre: "ceviche",
    detalle: "ceviche, cebolla morada, pimentón, limón",
    categoria: "entradas",
    precio: 5000,
  },
  {
    id: 2,
    nombre: "porotos granados",
    detalle: "poroto, tomate, choclo",
    categoria: "fondo",
    precio: 8000,
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={{ width: "90%" }}>
      <Text style={[styles.title, textColor]}>Nombre: {item.nombre}</Text>
      <Text style={[styles.title, textColor]}>Categoria: {item.categoria}</Text>
      <Text style={[styles.title, textColor]}>Detalle: {item.detalle}</Text>
      <Text style={[styles.title, textColor]}>Precio: {item.precio}</Text>
    </View>
    <Feather
      name="edit"
      size={24}
      color="black"
      style={{ position: "absolute", right: 20, top: "50%" }}
    />
  </TouchableOpacity>
);

const ContactListReceta = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(DATA);
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [receta, setReceta] = useState({
    id: 0,
    nombre: "",
    detalle: "",
    categoria: "",
    precio: 0,
  });

  const changeReceta = (name, text) => {
    setReceta({ ...receta, [name]: text });
  };

  useEffect(() => {
    prueba();
  }, []);

  const prueba = async () => {
    axios
      .get("http://192.168.1.89:8081/api/obtener/receta")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log("err", err));
  };

  const editReceta = async () => {
    axios
      .post("http://192.168.1.89:8081/api/guardar/receta", {
        id: receta.id,
        nombre: receta.nombre,
        detalle: receta.detalle,
        categoria: receta.categoria,
        precio: receta.precio,
      })
      .then((res) => {
        prueba();
        setReceta({
          id: 0,
          nombre: "",
          detalle: "",
          categoria: "",
          precio: 0,
        });
      })
      .catch((err) => console.log("err", err));
  };

  const addReceta = async () => {
    axios
      .post("http://192.168.1.89:8081/api/guardar/receta", {
        nombre: receta.nombre,
        detalle: receta.detalle,
        categoria: receta.categoria,
        precio: receta.precio,
      })
      .then((res) => {
        prueba();
        setReceta({
          id: 0,
          nombre: "",
          detalle: "",
          categoria: "",
          precio: 0,
        });
      })
      .catch((err) => console.log("err", err));
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#F05742" : "#ffffff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          setModalVisible(true);
          setReceta(item)
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
      <ModalListRecipe
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        valueId={receta.id}
        valueNombre={receta.nombre}
        valueDetalle={receta.detalle}
        valueCategoria={receta.categoria}
        valuePrecio={receta.precio}
        onChangeText={changeReceta}
        onPressEdit={() => editReceta()}
      />
      <ModalAddRecipe
        modalVisible={modalAddVisible}
        setModalVisible={setModalAddVisible}
        valueId={receta.id}
        valueNombre={receta.nombre}
        valueDetalle={receta.detalle}
        valueCategoria={receta.categoria}
        valuePrecio={receta.precio}
        onChangeText={changeReceta}
        onPressEdit={() => addReceta()}
      />
      <TouchableOpacity
        style={styles.plus}
        onPress={() => setModalAddVisible(true)}
      >
        <AntDesign name="plus" size={40} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    height: "100%",
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
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ContactListReceta;
