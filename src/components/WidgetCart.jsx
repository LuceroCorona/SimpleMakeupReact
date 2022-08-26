import { Link } from "react-router-dom";
import carrito from "../assets/img/carrito.png";
import React,{ useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const WidgetCart = () => {
  const { cartItems } = useContext(CartContext);
return (
  <>
    {cartItems.length === 0 ? (
      <></>
    ) : (
      <>
      <Link to={"/cart/"}>
      <img 
      style={{width:80}}
      src={carrito} alt="carrito"/>

      </Link>
      <h2 style={{paddingRight:50}}>{cartItems.length}</h2>
      </>
    )}
  </>
);
};

export default WidgetCart;
