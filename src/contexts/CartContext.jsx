import React, { createContext, useState } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  writeBatch,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const sendOrder = async (totalPrice, buyerData) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const order = {
      items: cartItems,
      total: totalPrice,
      buyer: buyerData,
    };
    const batch = writeBatch(db);
    const idList = cartItems.map((product) => product.item.id);
    const withoutStock = [];
    const collectionRef = collection(db, "items");
    const docsResponse = await getDocs(
      query(collectionRef, where(documentId(), "in", idList))
    );
    docsResponse.docs.forEach((doc) => {
      const dataDoc = doc.data();
      const prod = cartItems.find((prod) => prod.item.id === doc.id);

      if (dataDoc.stock >= prod.quantity) {
        batch.update(doc.ref, { stock: dataDoc.stock - prod.quantity });
      } else {
        withoutStock.push({ prod });
      }
    });
    if (withoutStock.length === 0) {
      const addResponse = await addDoc(orderCollection, order);
      batch.commit();
      alert(`Tu número de orden es: ${addResponse.id}`);
    } else {
      alert(
        "La compra no ha sido completada, no contamos con suficiente stock"
      );  
    }
    
  };
  const addItem=(item,quantity)=>{
    const newItem =isInCart(item)
    if (newItem){
      quantity = quantity + newItem.quantity;
      setCartItems(cartItems.splice(cartItems.findIndex(e=>e.item.id === item.id),1))
    }
  setCartItems([...cartItems,{item,quantity}])
  }
  const isInCart=(item)=>{
    return cartItems.find(e=>e.item === item);
  }
  const clear=()=>{
    setCartItems([])
  }
  const removeItem=(itemId)=>{
    setCartItems(cartItems.filter((e) => e.item.id !== itemId))
  }

  const total =()=>{
    return cartItems.reduce(
      (previousValue, currentValue) => previousValue + currentValue.item.price * currentValue.quantity,
    0
  );}


  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        sendOrder,
        addItem,isInCart,clear,removeItem,cartItems, setCartItems, total,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
