import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface props {
  id: string;
  name: string;
  price: number;
  dsc: string;
}

function RowItem({ id, name, price, dsc }: props) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
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
      <div className="w-[13%] items-center flex-row description1 space-x-3 space-y-1">
        <p className="text-xl font-bold pl-6">₹{price}</p>
        <button
          onClick={() => increaseCartQuantity(id)}
          className="p-2 w-36 h-10 bg-blue-300 hover:p-3 hover:bg-blue-400 ease-out rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default RowItem;
