import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart ={};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{

        const [cartItems, setCartItems] = useState(getDefaultCart());

        const addToCart = (itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            console.log(cartItems);
        }

        const removeFromCart = (itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        }
        
        const getTotalCartAmount = () =>{
            console.log("made");
            let totalAmount = 0;
            for (let index = 0; index < Object.keys(cartItems).length; index++) {
                console.log("index:" + index);
                if(cartItems[index] > 0){
                    console.log("made it2");
                    let itemInfo = all_product.find((product)=>product.id===Number(index));
                    console.log(itemInfo.new_price);
                    totalAmount += itemInfo.new_price * cartItems[index];
                }
                console.log(totalAmount);
            }
                return totalAmount.toFixed(2);
                
            
            
        }

            const getTotalCartItems = () =>{
                    let totalItems = 0;
                    for(const item in cartItems){
                        if(cartItems[item] > 0){
                            totalItems += cartItems[item];
                        }
                    }
                    return totalItems;
            }

        const contextValue = {all_product, cartItems,addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};

        return(
            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
        )

}

export default ShopContextProvider;