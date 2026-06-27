import { createContext, useState } from "react";

export const UserCartContext = createContext();

function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const Addtocart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const RemovefromCart = (id) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <UserCartContext.Provider
      value={{
        cart,
        Addtocart,
        RemovefromCart,
      }}
    >
      {children}
    </UserCartContext.Provider>
  );
}

export default ContextProvider;