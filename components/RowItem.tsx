import React from "react";
import { useShoppingCart } from '../context/ShoppingCartContext';


interface props {
  id: string;
  name: string;
  price: number;
  dsc: string;
}

function RowItem({ id, name, price, dsc }: props) {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity} = useShoppingCart();
    const quantity = getItemQuantity(id);
  return (
    <div
      key={id}
      className="display:flex-row pt-3 pl-4 border-b-2 pb-2 border-neutral-300 border-opacity-20 description"
    >
      <div className="flex-col">
        <h1 className="font-light font-serif text-xl">{name}</h1>
        <p className="font-extralight text-gray-400 text-xs">{dsc}</p>
      </div>
      <div className="w-[13%] space-y-1">
        <p className="text-xl font-extrabold pl-6">Rs. {price}</p>
        {quantity===0 ? (
            <button onClick={()=> increaseCartQuantity(id)} className="p-2  bg-blue-300 rounded-md">Add to Cart</button>
        ): (
            <div className="flex-row description" style={{}}>
                <button onClick={()=> decreaseCartQuantity(id)} className="rounded-full p-2 bg-blue-300">-</button>
                <div className="pl-2 pr-2 font-bold underline">{quantity}</div>
                <button onClick={()=> increaseCartQuantity(id)} className="rounded-full p-2 bg-blue-300">+</button>
            </div>
        )}
      </div>
    </div>
  );
}

export default RowItem;
