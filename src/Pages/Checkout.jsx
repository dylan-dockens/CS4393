import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom'
import './css/Checkout.css'

const Checkout = () => {
    const {getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='main-form'>
        <form className="shipping-form">
            <h1>Shipping Info</h1>
            <div style={{marginBottom: '50px'}}>
                <pre>*First Name:   <input id='fName' type="text" required></input>  *Last Name: <input id='lName' type="text" required></input></pre>
                <pre>*Phone Number: <input id='phoneNum' type="text" required></input>  *Email:     <input id='email' type="text" required></input></pre>
                <pre>*Street Address: <input id='address' style={{width: '500px'}} type="text" required></input>
                </pre>
                <pre>*City: <input id='city' type="text" required></input>  *State: <input id='state' type="text" required></input> *Zipcode: <input id='zipcode' type="text" required></input></pre>
            </div>
            <h1>Payment Info</h1>
            <div>
                <pre>Card Number:   <input type="number" required></input></pre>
                <pre>Exp Date:   <input type="month" required></input>      CSV:    <input type="number" min="100" max="999" required></input></pre>
                <pre style={{marginBottom: '100px'}}>Name on Card: <input type="text" required></input></pre>
            </div>


            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <Link style={{textDecoration: 'none'}} to='/orderplaced'><button>Place Order</button></Link>
                </div>
            </div>
        </form>
      </div>
  )
}



export default Checkout