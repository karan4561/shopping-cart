import React from "react";
import Row from "components/Row";
import { Menu } from "typings";


interface Props {
  Burger: Menu[];
  BBQs: Menu[];
  Breads: Menu[];
  Chocolates: Menu[];
  Drinks: Menu[];
}

function MenuCard({ Burger, BBQs, Breads, Chocolates, Drinks }: Props) {
  return (
    <div className="w-[45%]">
      <div className="mt-16 ">
        <input
          className="py-2 pl-3 w-[90%] border-gray-400 border-2"
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
        <Row title="Burger" menus={Burger}/>
        <Row title="BBQs" menus={BBQs}/>
        <Row title="Breads" menus={Breads}/>
        <Row title="Chocolates" menus={Chocolates}/>
        <Row title="Drinks" menus={Drinks}/>
      </div>
    </div>
  );
}

export default MenuCard;
