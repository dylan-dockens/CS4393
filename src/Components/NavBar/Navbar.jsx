import React, {useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
      <img src={logo} alt="" width={200} height={200}/>
      <p>MotoParts</p>
    </div>
    <ul className="nav-menu">
    <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("exhuasts")}}><Link style={{ textDecoration: 'none' }} to='/exhausts'>Exhuasts</Link>{menu==="exhuasts"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("levers")}}><Link style={{ textDecoration: 'none' }} to='/levers'>Levers</Link>{menu==="levers"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("tail")}}><Link style={{ textDecoration: 'none' }} to='/tail'>Fender Eliminators</Link>{menu==="tail"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("windshields")}}><Link style={{ textDecoration: 'none' }} to='/windshields'>Wind Shields</Link>{menu==="windshields"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("mirrors")}}><Link style={{ textDecoration: 'none' }} to='mirrors'>Mirrors</Link>{menu==="mirrors"?<hr/>:<></>}</li>
  </ul>
  <div className="nav-login-cart">
    <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>
    <Link style={{ textDecoration: 'none' }} to='/cart'><img src={cart_icon} alt=""/></Link>
    
    <div className="nav-cart-count">0</div>
    </div>
    </div>
  )
}
  
export default Navbar
