import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  View,
  TextInput,
  Image,
} from "react-native";
import ModalList from "./Modal";
import { FetchProducto } from "../api/fetch";

const DATA = [
  {
    id: 1,
    cantidad: 5,
    precio: 2000,
    producto_id: 1,
    habilitado: true,
  },
  {
    id: 2,
    cantidad: 2,
    precio: 2000,
    producto_id: 2,
    habilitado: true,
  },
  {
    id: 3,
    cantidad: 5,
    precio: 2000,
    producto_id: 3,
    habilitado: true,
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>Producto: {item.producto_id}</Text>
    <Text style={[styles.title, textColor]}>Cantidad: {item.cantidad}</Text>
    <Text style={[styles.title, textColor]}>Precio: {item.precio}</Text>
  </TouchableOpacity>
);

const ContactListStock = () => {
  return (
    <View styles={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/img/fondo.png")}
      />
      <View style={styles.form}>
        <Text style={{ margin: 20, marginTop: 20 }}>
          Ingresar solicitud a proveedor
        </Text>
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
        <Pressable style={[styles.button, styles.buttonClose]}>
          <Text style={styles.textStyle}>Ingresar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "90%",
    alignSelf: "center",
    color: "#F05742",
    marginTop:30
  },
  buttonOpen: {
    backgroundColor: "#F05742",
  },
  buttonClose: {
    backgroundColor: "#F05742",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  imagen: {
    width: "100%",
    height: "100%",
  },
  form: {
    backgroundColor: "white",
    marginTop: "40%",
    borderRadius: 20,
    zIndex: 1000,
    flex: 1,
    padding: 35,
    position: "absolute",
    alignSelf: "center",
    zIndex: 1000,
  },
});

export default ContactListStock;
