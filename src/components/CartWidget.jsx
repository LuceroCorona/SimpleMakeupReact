import carrito from "../assets/img/cart_icon.jpg"

const CartWidget = () => {
    const amount = 0;
    return(
        <>
        <img style={{width:50}} src={carrito} alt="carrito"/>
        <h2 style={{marginRight:20}}>{amount}</h2>
        </>
    )
}

export default CartWidget;