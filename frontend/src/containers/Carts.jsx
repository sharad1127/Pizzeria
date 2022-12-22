import React, {useEffect} from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CartItem from "../components/common/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../reducks/carts/selectors";
import  {fetchItem} from "../reducks/items/operations"
import { fetchCart} from "../reducks/carts/operations"


function Carts() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchItem())
    if (localStorage.getItem("LOGIN_USER_KEY")){
      dispatch(fetchCart())
    }
},[])
 
  const carts = useSelector(getCart)
  return (
    <>
      <Header />
      <div class="menu order">
        <h2>My Order</h2>
      </div>
      <div class="products order">
        {carts && carts.length >0 && carts.map((cart) => <CartItem key={cart.id} cart={cart} /> ) }
        
      </div>
      <Footer />
    </>
  );
}

export default Carts;
