import React, { useEffect,useState } from 'react'
import Header from '../components/common/Header'
import main_img from '../assets/img/Mask Group 2.png'
import Items from '../components/common/Items'
import Footer from '../components/common/Footer'
import { fetchItem } from '../reducks/items/operations'
import { useDispatch, useSelector } from 'react-redux'
import {getItem} from '../reducks/items/selectors'
import { fetchCart } from '../reducks/carts/operations'
import { getSubtotal } from '../reducks/carts/selectors'


function Home() {
  const [btn, setBtn] = useState(true)
  const temp = useSelector((state)=>state)
  const items = useSelector(getItem)
  const subtotal = useSelector(getSubtotal)
  console.log('items',items)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchItem())
        if (localStorage.getItem("LOGIN_USER_KEY")){
          dispatch(fetchCart())
        }
    },[])
  return (
    <>
      <Header />

      <div class="img">
   <img src={main_img} alt="pizza" />
    <div class="text">
      <h1>Dino’s Pizzeria</h1>
      <h3>Pizza is our superpower.</h3>
    </div>
  </div>
  <div class="about">
    <h1>About Us</h1>

    <p>In Dino’s Pizzeria pizza usually falls into two categories:</p>
    <p>thick and cheesy Chicago style or thin and more traditional Dino’s Pizzeria pizza.</p>
    <p>In Italy pizza also falls into two distinct categories: Italian pizza and the rest of the world.</p>

  </div>

  <div class="menu">
    <hr />
    <h2>Pizza Menu</h2>
    <hr />
  </div>
  <div class="products">
  {items && items.map((item)=>
  
  <Items key={item.id} item={item}/>
  )}
</div>


{subtotal == 0 ? null : <Footer setBtn={setBtn} btn={btn} />
}
   

    </>


  )
}

export default Home
