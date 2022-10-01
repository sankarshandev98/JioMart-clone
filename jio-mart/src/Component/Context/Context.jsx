import React from 'react';
import { createContext ,useState} from 'react';
const Cart = createContext();
const Context = ({ children }) => {
  const [cartPopUpVisible, setcartPopUpVisible] = useState(false);
  const value = { cartPopUpVisible, setcartPopUpVisible };
  return <Cart.Provider value={value}>{children}</Cart.Provider>;
};

export default Context;
