import React from 'react'
import { Menu } from 'typings'

type CartItemProps = {
    id: string;
    quantity: number;
}

interface Props{
    Data: Menu[];
    item: CartItemProps;
}
export default function CartItem({item, Data}: Props) {
    const cart = Data.map(value=>{
        if(value?.id?.includes(item.id))
            console.log("YYAYAYAYAY")
    })
    console.log(item.id);
    console.log(Data);
    if(cart==null){
        console.log("NULLLLLLLLLL")
        return null;
    }
  return (
    <div className='flex-row justify-between align-middle m-auto'>
        {/* <div>{cart.name}</div>
        <div>{cart.price}</div> */}
    </div>
  )
}
