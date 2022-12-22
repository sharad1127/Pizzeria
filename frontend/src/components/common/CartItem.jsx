import React from 'react'
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";
import { useDispatch } from 'react-redux';

export default function CartItem({cart}) {
  const dispatch = useDispatch();
  const increaseCartItem = () => {
    dispatch(increaseCart(cart.id));
  };
  const decreaseCartItem = () => {
    dispatch(decreaseCart(cart.id));
  };
  
  return (
    <>
    <div class="product-title">
                    <img src={`https://res.cloudinary.com/techis/${cart.item.image}`} alt="Peppy veg pizza" />
                    <h2>{cart.item.name}</h2>
                    <p>
                   {cart.item.description}
                    </p>
                 <div class="price-add">
                    <div class="price"><strong>${cart.item.price}</strong></div>
                    <div class="add-cart">
              <span onClick={() => increaseCartItem()}>+</span>
              <span>{cart.quantity}</span>
              <span onClick={() => decreaseCartItem()}>-</span>
            </div>
                </div>   
                </div>


  
              
    </>
  )
}
