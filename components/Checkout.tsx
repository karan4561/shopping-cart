import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext';
import { Menu } from 'typings';
import CartItem from './CartItem';

interface Props{
    Data: Menu[];
}

function Checkout({Data}: Props) {
    const {cartQuantity, cartItems} = useShoppingCart();
  return (
    <div>
        {cartQuantity>0 && (
            <div className='flex-col space-x-2'>
                <p className='text-5xl m-auto'>Item Added to cart</p>   
                {cartItems.map(item=>(
                    <CartItem 
                    item={item}
                    Data={Data}/>
                ))}
            </div>
        )}
    </div>
  )
}

export default Checkout