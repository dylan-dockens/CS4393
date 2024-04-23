import React, { useContext, useState } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);

  const getFilteredItems = (query, items) => {
    if (!query){
      return items;
    }
    return items.filter((product) => product.name.includes(query));
  }

  const [query, setQuery] = useState("");

  const items = all_product;
  return (

    
    
    <div className='shop-category'>
      
      <div className='banner'><h1 className="title">{props.title}</h1><img className="shop-category-banner" src={props.banner} alt=""></img></div>
      <div className="shopcategory-indexSort">
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt=""></img>
        </div>
      </div>
      <div className="search">
      <h1>Search</h1>
      <div>
      <input className = "searchBar" placeholder="Search" onChange={}/>
    </div>
   
    </div>
      <div className="shopcategory-products">
        {all_product.map((item, i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image}new_price={item.new_price} old_price={item.old_price}/>
          }
          if(props.category==="all"){
            return <Item key={i} id={item.id} name={item.name} image={item.image}new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
