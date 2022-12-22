import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";
import { getCart, getSubtotal } from "../../reducks/carts/selectors";

const Items = ({ item }) => {
  const temp = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = useSelector(getCart);
  const key = localStorage.getItem("LOGIN_USER_KEY");
  const subTotal = useSelector(getSubtotal)

  const [itemInCart, setItemInCart] = useState();
  const handleClick = () => {
    dispatch(addCart(item));
  };
  const increaseCartItem = () => {
    dispatch(increaseCart(itemInCart.id));
  };
  const decreaseCartItem = () => {
    dispatch(decreaseCart(itemInCart.id));
  };
  useEffect(() => {
    if (carts != undefined && carts.length > 0) {
      let selectedCart = carts.filter((cart) => cart.item.id == item.id);
      if (selectedCart.length > 0) {
        setItemInCart(selectedCart[0]);
      } else {
        setItemInCart(null);
      }
    }
  });

  return (
    <>
      <div class="product-title">
        <img src={item.image} alt="Peppy veg pizza" />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div class="price-add">
          <p class="price">
            <strong>${item.price}</strong>
          </p>

          {subTotal!= 0 && itemInCart ? (
            <div class="add-cart">
              <span onClick={() => increaseCartItem()}>+</span>
              <span>{itemInCart.quantity}</span>
              <span onClick={() => decreaseCartItem()}>-</span>
            </div>
          ) : (
            <button class="add-cart" onClick={handleClick}>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Items;
