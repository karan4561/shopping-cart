import React from "react";
import { FireIcon } from "@heroicons/react/24/solid";
import { useShoppingCart } from "../context/ShoppingCartContext";
function Sidebar() {
  const categoryMap = [
    { id: "burgers", name: "Burgers" },
    { id: "bbqs", name: "BBQs" },
    { id: "chocolates", name: "Chocolates"},
    { id: "drinks", name: "Drinks"},
    { id: "pizzas", name: "Pizzas"}
  ];
  const { handleFoodTypeChange,foodType } = useShoppingCart();
  return (
    <div className="flex-col space-y-8 font-bold ml-16 w-[150px] border-r-2 border-red-50 mt-16">
      <div className="text-green-300 ">
        <FireIcon className="h-5 w-5 float-left" />
        Categories
        <hr className="w-16 h-0.5 bg-gray-100 opacity-70 border-0 rounded ml-5 my-6 dark:bg-gray-700" />
      </div>
      {categoryMap.map((category) => (
        <button
          className={`w-[80%] active:underline ${foodType===category.id && "text-red-500"}`}
          onClick={() => handleFoodTypeChange(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
