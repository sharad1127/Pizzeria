import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import cart from '../../assets/img/local_mall_black_24dp.svg'
import {useSelector} from "react-redux"
import {getCount} from "../../reducks/carts/selectors"

function Header() {
  const updateCount = useSelector(getCount)
  let key = localStorage.getItem('LOGIN_USER_KEY')
  const [Log,setLog]= useState('Logout')
  const handleClick = ()=> {
    localStorage.clear()
    setLog('')
    key = localStorage.getItem('LOGIN_USER_KEY')
  }

  return (
    <>
    <header>
    <Link to = "/">
    <h1>Dino's pizzeria</h1> 
    </Link>
    <div class="top-line">
      {key ? <h2 onClick = {handleClick}>Logout</h2>: <Link to="/signup">Signup</Link>}
      
      <div class="cart">
        <Link to= "/carts">
        <img src={cart} alt="" />
        </Link>
        <div class="cart_count">{updateCount}</div>
      </div>
    </div>

  </header>
      
    </>
  )
}

export default Header
