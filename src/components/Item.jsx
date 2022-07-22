import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { title, price, pictureUrl, id } = item;
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img  className="card-img-top" style={{width:200, height:180}} src={pictureUrl} alt="Card image cap"  />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-title">$ {price}</h5>
        
        <Link to={`item/${id}`}>
          <button className="btn btn-primary">Ver detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
