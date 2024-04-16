import React from 'react'
import './Breadcrumbs.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcrums = (props) => {
  const {product} = props;
  return (
    <div className="breadcrum">
      Home <img src={arrow_icon} alt=""/> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}
 
export default Breadcrums
