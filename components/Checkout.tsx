import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext';
import { Menu } from 'typings';
import CartItem from './CartItem';

interface Props{
    Data: Menu[];
}

function Checkout({Data}: Props) {
    const {cartQuantity, cartItems} = useShoppingCart();
    const x:any = [];
    Data.map((D:any)=>D.map((D1:any)=>x.push(D1))) 
  return (
    <div>
        {cartQuantity>0 && (
            <div className='flex-col space-x-2'>
                <p className='items-center pb-6 bg pl-4 text-lg font-serif pt-72 m-auto'>My Bag :</p>   
                {cartItems.map(item=>(
                    <CartItem 
                    item={item}
                    Data={Data}/>
                ))}

                <div className='pt-16 text-2xl font-extrabold underline font-mono'>Grand Total: Rs.{
                    cartItems.reduce((total, cartItem) => {
                        const cart = Object.values(x).find((i:any)=>i.id===cartItem.id)
                        return total + (cart?.price||0)*cartItem.quantity},0)
                    }
                </div>

                <button className='px-4 py-2 bg-yellow-100 text-black rounded-lg items-center mt-10 ml-18'>Proceed To Checkout</button>
            </div>
        )}
    </div>
  )
}

export default Checkout