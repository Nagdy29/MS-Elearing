import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext(null);

const StoreContextProvide = (props) => {
  const url = "http://localhost:4000";
  const [cartItem, setcartItem] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setfood] = useState([]);
  const [persone_list, setpersone] = useState([]);
  const [userData, setUserData] = useState([]);
  const [instData, setinstData] = useState([]);

  const addcart = (itemId) => {
    if (!cartItem[itemId]) {
      setcartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removecart = (itemId) => {
    setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const featchFood = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    setfood(response.data.data);
  };
  const featchPersone = async () => {
    const response = await axios.get(`${url}/api/persone/list`);
    setpersone(response.data.data);
  };

  useEffect(() => {
    async function loadData() {
      await featchFood();
      await featchPersone();
    }
    loadData();
  }, []);
  const contextValue = {
    food_list,
    addcart,
    removecart,
    cartItem,
    setcartItem,
    getTotalCartAmount,
    token,
    setToken,
    url,
    userData,
    setUserData,
    instData,
    setinstData,
    persone_list,
    setpersone,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvide;
