import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import './css/OrderPlaced.css'

const OrderPlaced = () => {
    const {all_product, cartItems, removeFromCart} = useContext(ShopContext);
    all_product.map((e)=>{
        if(cartItems[e.id]>0) return removeFromCart(e.id);
        else return null;
    })
    const orderNum =  Math.floor(Math.random() * (9999999999 - 100000000) ) + 100000000;

    return (
        <div className='order-placed'>
            <h1>Order Placed!</h1>
            <h3 style={{margin:'10px'}}>Order Number: #{orderNum}</h3>
            <h3 style={{margin:'10px'}}>Thank You for Shopping with MotoParts</h3>
        </div>
    )
}


export default OrderPlaced;