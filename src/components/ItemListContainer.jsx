import React, {useEffect, useState} from 'react';
import products from '../data/products';
import ItemList from './ItemList';

function getProducts () {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
} 

function ItemListContainer() {
const [products, setProducts] = useState([]);

useEffect( () => {
    getProducts().then(respuestaPromise => {
        console.log(respuestaPromise);
    });
}, []);

return (
    <ItemList products={products}/>
)

};

export default ItemListContainer;