import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from "react-native";

const ModalAddRecipe = ({
  modalVisible,
  setModalVisible,
  valueId,
  valueNombre,
  valueDetalle,
  valueCategoria,
  valuePrecio,
  onChangeText,
  onPressEdit,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Editar Receta</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              keyboardType="text"
              value={valueNombre}
              onChangeText={(value) => onChangeText("nombre", value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Detalle"
              keyboardType="text"
              value={valueDetalle}
              onChangeText={(value) => onChangeText("detalle", value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Categoría"
              keyboardType="text"
              value={valueCategoria}
              onChangeText={(value) => onChangeText("categoria", value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Precio"
              keyboardType="numeric"
              value={valuePrecio}
              onChangeText={(value) => onChangeText("precio", value)}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                onPressEdit();
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Editar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    width: 200,
    elevation: 2,
    margin: 10,
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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    width: 200,
    borderWidth: 1,
    padding: 10,
  },
});

export default ModalAddRecipe;
