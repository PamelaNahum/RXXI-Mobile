import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";

const ModalListProduct = ({modalVisible, setModalVisible, producto, setProduct}) => {
  //const [producto, setProduct] = useState(producto);

  const changeProduct = (name, text) => {
    setProduct({ ...producto, [name]: text });
  };

  /*useEffect(()=>{
    setProduct(producto)
},[producto])*/

  const editProduct = () => {
    axios.get('http://192.168.1.91:8081/api/guardar/producto',{
      id:producto.id,
      nombre:producto.nombre,
      categoria:producto.categoria,
      habilitado:true,
      stock:producto.stock
    })
			.then(res => {console.log(res.data); setData(res.data) })
			.catch(err => console.log('err', err));
  };
  
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
          <Text style={styles.modalText}>Editar Producto</Text>
          {producto != undefined ? <><TextInput
        style={styles.input}
        placeholder="Nombre"
        keyboardType="text"
        value={producto.nombre}
        onChangeText={changeProduct}
      />
      <TextInput
        style={styles.input}
        placeholder="Categoría"
        keyboardType="text"
        value={producto.categoria}
        onChangeText={changeProduct}
      />
      <TextInput
        style={styles.input}
        placeholder="Stock"
        keyboardType="numeric"
        value={producto.categoria}
        onChangeText={changeProduct}
      /></> :<></>}
            
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =>{editProduct(); setModalVisible(!modalVisible)}}
            >
              <Text style={styles.textStyle}>Agregar</Text>
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
    marginTop: 22
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ModalListProduct;