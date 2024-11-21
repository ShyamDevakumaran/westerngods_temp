import React, { createContext, useState, useEffect } from "react";
import {
  toastsuccess,
} from "../components/toast-style/toast-style";
import Cookies from "js-cookie";
import { decryptData, encryptData } from "../utils/Utils";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart?.reduce((accumulator, currentItem) => {
      console.log(currentItem);
      return (
        accumulator + parseFloat(currentItem.cost_price) * currentItem.amount
      );
    }, 0);
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    const savedCart = Cookies.get("cart");

    if (savedCart) {
      try {
        const decryptedCart = decryptData(savedCart);
        console.log(decryptedCart);
        setCart(decryptedCart);
      } catch (e) {
        console.error("Failed to decrypt cart data", e);
      }
    }
  }, []);

  useEffect(() => {
    const encryptedCart = encryptData(cart);
    Cookies.set("cart", encryptedCart, { expires: 7 });
  }, [cart]);

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart?.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // add to cart
  const addToCart = (product, id, size, toast) => {
    const newItem = { ...product, amount: 1, selectedSize: size };

    // check if the item is already in the cart
    const cartItem = cart?.find((item) => {
      return item.id === id && item.selectedSize == size;
    });
    if (cartItem) {
      const newCart = [...cart]?.map((item) => {
        if (item.id === id && !toast) {
          // toastsuccess("Successfully added to cart");
          return { ...item, amount: cartItem.amount + 1 };
        }
        if (item.id === id && toast) {
          toastsuccess("Successfully added to cart");
          return { ...item, amount: cartItem.amount + 1 };
        } else return item;
      });
      setCart(newCart);
    } else {
      toastsuccess("Successfully added to cart");
      // dispatch(addBagAction(adddata));

      setCart([...cart, newItem]);
    }
  };

  const changeSize = (id, prevsize, newSize) => {
    const cartItem = cart?.find((item) => {
      return item.id === id && item.selectedSize == prevsize;
    });
    if (cartItem) {
      const newCart = [...cart]?.map((item) => {
        if (item.id === id && item.selectedSize == prevsize) {
          return { ...item, selectedSize: newSize };
        } else return item;
      });
      setCart(newCart);
    }
  };

  // remove from cart
  const removeFromCart = (id, size) => {
    const newCart = cart?.filter((item) => {
      return !(item.id == id && item.selectedSize == size);
    });
    setCart([...newCart]);
  };

  // cleart cart
  const clearCart = () => {
    Cookies.remove("cart");
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id, size, toast) => {
    const cartItem = cart?.find(
      (item) => item.id == id && item.selectedSize == size
    );
    // addToCart(cartItem, id, size, toast);
    if (cartItem) {
      const newCart = [...cart]?.map((item) => {
        if (item.id == id && item.selectedSize == size) {
          return { ...item, amount: cartItem.amount + 1, selectedSize: size };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    // else{
    //   addToCart()
    // }
  };

  // decrease amount
  const decreaseAmount = (id, size) => {
    const cartItem = cart?.find(
      (item) => item.id === id && item.selectedSize == size
    );
    if (cartItem) {
      const newCart = cart?.map((item) => {
        if (item.id === id && item.selectedSize == size) {
          return { ...item, amount: cartItem.amount - 1, selectedSize: size };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id, size);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        changeSize,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
