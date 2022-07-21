import React from 'react';
import products from '../data/products'

function Item({product}) {
    return(
    <div>
        <h1>{product.name}</h1>
        <p>${product.price}</p>
        <hr/>
    </div>
    )
}

export default Item;