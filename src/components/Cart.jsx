import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
const { removeItem, clear,total,addItem} = useContext(CartContext);
const [totalPrice, setTotalPrice] = useState(0);
const { cartItems, sendOrder } = useContext(CartContext);
const handleSubmit = (e) => {
  e.preventDefault();
  const inputs = document.getElementsByTagName("input");
  console.log(inputs[0]);
  const data = Array.from(inputs).map((input, index) => input.value);
  sendOrder(totalPrice, { name: data[0], mail: data[1], phone: data[2] });
};
const tot=total()
return (
  <>
    {cartItems.length === 0 ? (
      <>
        El carrito esta vacio!
        <Link to={"/"}>Volver</Link>
      </>
    ) : (
      <>
        {cartItems.map((element) => (
          <CartItem item={element.item} quantity={element.quantity} removeItem={removeItem} addItem={addItem}/>
        ))}
        <button className="bg-red-500 p-2 " onClick={() => clear()}>
          Vaciar carrito
        </button>
        <h1>El total de la compra es de : {tot}</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="email" />
        <input type="tel" />
        <button
          type="submit"
          className="btn btn-info"
        >
          Preparar pedido  
        </button>
      </form>
      </>
    )}
  </>
);
};

export default Cart;
