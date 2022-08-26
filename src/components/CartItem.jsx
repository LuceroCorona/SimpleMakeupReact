import React from "react";
const CartItem = ({item,quantity,removeItem})=> {
    return (
    <>
     <img style={{width:200, height:180}}
                src={item.pictureUrl}
                alt="Card image cap"
              />
   
    <div className="flex"> 
    {item.title} - {item.price} - {quantity}
    <button onClick={()=>removeItem(item.id)}>Eliminar</button>

    
    </div>
    
        </> 
    )
}

export default CartItem