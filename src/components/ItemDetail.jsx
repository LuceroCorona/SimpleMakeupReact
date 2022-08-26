import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [amount, setAmount] = useState(0);
  const { title, price, stock, pictureUrl, description } = item;

  const onAdd = (amount) => {
 addItem(item,amount)
  };

  return (
    <div className="card" style={{ width: "20rem" }}>
      <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{title}</h5>
        <h1 className="card-title">$ {price}</h1>
        <h5 className="card-text">{description}</h5>
        <p className="card-text">{`${stock} unidades disponibles`}</p>

      </div>
      {amount == 0 ? (
        <ItemCount stock={stock} initial={0} onAdd={onAdd} />
      ) : (
        <h5 className="card-text">Comprarás {amount} items</h5>
      )}
      <div className="d-flex justify-content-center my-3">
        <Link to="/cart/">
          <button className="btn btn-warning">Ir al carrito 🥗</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
