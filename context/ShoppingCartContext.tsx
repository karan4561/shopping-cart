import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { Menu } from "typings";

type Props = {
  children: ReactNode;
};

type CartItem = {
  id: string;
  quantity: number;
};

type ShoppingCartContext = {
  FoodData: Menu[];
  foodType: string;
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (id: string) => void;
  decreaseCartQuantity: (id: string) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  handleFoodTypeChange: (type: string) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [foodType, setFoodType] = useState<string>("burgers");
  const [data, setData] = useState<any>([]);

  const BASE_URL = "https://free-food-menus-api-production.up.railway.app";

  const fetchDataApi = () => {
    fetch(`${BASE_URL}/${foodType}`)
      .then((res) => res.json())
      .then((food) => {
        //console.log(food);
        // [Prev: , burgers:{},{},{}]=>[{},{},{},{}]
        //setData([...Data,burgers])
        setData(food);
      });
  };

  const handleFoodTypeChange = (type: string) => {
    setFoodType(type);
  };

  useEffect(() => {
    fetchDataApi();
  }, [foodType]);

  const FoodData = data;

  console.log(FoodData);

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  console.log(cartQuantity);

  function increaseCartQuantity(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
 
  return (
    <ShoppingCartContext.Provider
      value={{
        FoodData,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        cartQuantity,
        cartItems,
        handleFoodTypeChange,
        foodType
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
