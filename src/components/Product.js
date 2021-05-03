import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Product(){
  const [quantity, setQuantity] = useState(0);
  const finishOrder = useRef(null);
  
  useEffect(() => {
    async function saveStorage(){
      await AsyncStorage.setItem('quantities', quantity);
  }
    saveStorage();
  }, [quantity]);
  
  useEffect(() => {
    async function getStorage() {
      const productStorage = await AsyncStorage.getItem('quantities'); 
      if(productStorage){
        setQuantity(Number(productStorage));
      }
    }
    getStorage();
  }, [])
  
  function orderFocus(){
    finishOrder.current.focus();
  }
    
  return (
    <View style={styles.container}>
    <View style={styles.card}>
      
      <Image style={styles.imageProduct} source={{ uri: 'https://imagens.trocafone.com/images/phones/583449ab-branco-5.png' }} />
    
    <View style={styles.infoProduct}>
      <Text style={{ fontWeight: 'bold' }}>IPhone 5</Text>
      <Text>Quantidade: <Text style={{ fontWeight: 'bold' }}>{quantity}</Text>
      </Text>
      
      <View style={styles.quantityProduct}>
      <TextInput
       style={styles.input}
       placeholder='0'
       value={quantity}
       editable={false}
      />
          
      <TouchableHighlight
        style={styles.quantityButton}
        onPress={() => setQuantity(quantity + 1)}>
        <Text style={styles.more}>+</Text>
      </TouchableHighlight>  
    
    </View>
    </View>
    </View>
    
    <View style={styles.buttons}>
      <TouchableHighlight style={styles.finishButton}>
          <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 12 }}
          onPress={orderFocus}>FINALIZAR</Text>
      </TouchableHighlight>
        
      <TouchableHighlight style={styles.orderButton}>
          <Text
          style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 14 }}
          ref={finishOrder}><Icon name="shopping-cart" size={15} style={{ paddingRight: 10 }} color="white" />
          Realizar Pedido
        </Text>
      </TouchableHighlight> 

    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  card: {
    borderRadius: 8,
    borderWidth: 2,
    width: 250,
    height: 200,
    flexDirection: 'row',
  },
  imageProduct: {
    marginTop: 20,
    width: 100,
    height: 150,
  },
  infoProduct: {
    width: 150,
    margin: 15,
    flexDirection: 'column',
  },
  quantityProduct: {
    marginTop: 85,
    flexDirection: 'row',
    display: 'flex',
  },
  input: {
    padding: 5,
    width: 65,
    height: 30,
    borderWidth: 1,
    borderRadius: 4,
  },
  quantityButton: {
    marginLeft: 10,
    borderRadius: 15,
    backgroundColor: '#99D178',
    width: 30
  },
  more: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  finishButton: {
    width: 250,
    height: 30,
    backgroundColor: '#c0c0c0',
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: '#000000',
    borderWidth: 1,
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  },
  orderButton: {
    justifyContent: 'center',
    width: 250,
    height: 30,
    alignItems: 'center',
    marginTop: 275,
    backgroundColor: '#99d178',
    borderRadius: 8
  }
});
