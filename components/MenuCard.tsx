import React from "react";
import Row from "components/Row";
import { Menu } from "typings";
import RowItem from "../components/RowItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface Props {
  foodData: Menu[];
}

function MenuCard({ foodData }: Props) {
  const { FoodData } = useShoppingCart();
  //console.log(FoodData);
  return (
    <div className="w-[35%]">
      <div className="mt-16 ">
        <input
          className="py-2 pl-3 w-[85%] border-gray-400 border-2"
          type="text"
          placeholder="Search Food Item..."
        />
        <button className="border-2 ml-0.5 py-2 translate-y-1.5 px-3 border-gray-400">
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        {FoodData.map((item) => (
          <RowItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            dsc={item.dsc}
          />
        ))}
        {/* <Row title="Burger" menus={Burger}/>
        <Row title="BBQs" menus={BBQs}/>
        <Row title="Breads" menus={Breads}/>
        <Row title="Chocolates" menus={Chocolates}/>
        <Row title="Drinks" menus={Drinks}/> */}
      </div>
    </div>
  );
}

export default MenuCard;
