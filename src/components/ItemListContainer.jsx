import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

useEffect(() => {
  setLoading(true);
  const db = getFirestore();
  const itemsCollection = collection(db, "items");
  getDocs(itemsCollection)
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      if (name) {
        setItems(data.filter((item) => item.category === name));
      } else {
        setItems(data);
      }
    })
    .finally(() => setLoading(false));
}, [name]);

return <>{loading ? <Spinner  /> :         <ItemList items={items} />}</>;
}

export default ItemListContainer;