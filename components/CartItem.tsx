import { useShoppingCart } from "context/ShoppingCartContext";
import React from "react";
import { Menu } from "typings";

type CartItemProps = {
  id: string;
  quantity: number;
};

interface Props {
  Data: any;
  item: CartItemProps;
}
export default function CartItem({ item, Data }: Props) {
  //Data.map(i=>(console.log(i.id)));
  // const cart = Object.values Data.find((i)=>i.id===item.id)

  //const x:any = [];
  //Data.map((D:any)=>D.map((D1:any)=>x.push(D1)))

  //const cart = Object.values(x).find((i:any)=>i.id===item.id);

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const cart = Data.find((i: any) => i.id === item.id);
  const quantity = getItemQuantity(item.id);
  console.log(cart);
  //console.log(item.id);
  //console.log(Data);
  if (cart == null) {
    console.log("NULLLLLLLLLL");
    return null;
  }
  return (
    <div className="flex-row description space-x-5 text-xl bg-slate-500 space-y-5 justify-between mr-4 border m-auto">
      <div className="pl-2">{cart.name}</div>
      {/* <div className='pb-4'>{cart.price}</div> */}
      <div className="flex-row description pb-5" style={{}}>
        <button
          onClick={() => decreaseCartQuantity(item.id)}
          className="rounded-full px-2 bg-blue-300"
        >
          -
        </button>
        <div className="pl-2 pr-2 font-bold underline">{quantity}</div>
        <button
          onClick={() => increaseCartQuantity(item.id)}
          className="rounded-full px-2 bg-blue-300"
        >
          +
        </button>
      </div>
      {/* <div className="pb-4">x{item.quantity}</div> */}
      <div className="font-bold underline box pl-3 pb-5 pr-3">
      ₹ {item.quantity * cart.price}
      </div>
    </div>
  );
}
