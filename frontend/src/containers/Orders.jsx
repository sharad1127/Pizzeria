import React,{useEffect, useState} from 'react'
import Header from '../components/common/Header'
import { getCart, getSubtotal } from '../reducks/carts/selectors'
import {useSelector, useDispatch} from 'react-redux'
import  {fetchItem} from "../reducks/items/operations"
import { fetchCart} from "../reducks/carts/operations"
import { addOrder } from '../reducks/orders/operations'
import { Navigate, useNavigate } from 'react-router-dom'


function Orders() {
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchItem())
      if (localStorage.getItem("LOGIN_USER_KEY")){
        dispatch(fetchCart())
      }
      
  },[])
    const carts = useSelector(getCart)
    let totalQty =0



    if(carts.length > 0 ){
        carts.map(cart=>{
            {totalQty += cart.quantity}
        })
    }


    const [name,setName] = useState('')
    const [num,setPhoneNum] = useState()
    const [address,setAddress] = useState()
    const [code,setCode] = useState()
    const [apt,setApt] = useState('empty')
    const [city,setCity] = useState()
    const [state,setState] = useState()
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(addOrder({name, num, address, code,apt,city,state,subtotal}))
        if(name && num&& address && code && apt && city && state){
        navigate('/thanks')
        }
    }


    const subtotal = useSelector(getSubtotal)

  return (
  <>
      <Header />

      <div class="menu delivery">
        <hr />
        <h2>Order your items</h2>
        <hr />

      </div>

      <div class="delivery-details">
        <h3>Delivery Details</h3>
        <p>Please check your items and confirm it</p>
        <table>
            {carts && carts.length > 0 && carts.map((cart)=>
            
            <tr>
                
            <td>{cart.item.name}</td>
            <td class="number">{cart.quantity}</td>
            <td class="price">${cart.quantity * cart.item.price}</td>
        </tr>
            )}
           
            <tr class="table-bottom">
                <td>Total price</td>
                <td class="number">{totalQty}</td>
                <td class="price">${subtotal}</td>
            </tr>


        </table>
        <div class="form">
        <label>Full Name</label>
        <input type="text" onChange={(e)=>setName(e.target.value)} class="input-box"/>
        <br/>
        <label>Phone Number</label>
        <input type="Number" onChange={(e)=>setPhoneNum(parseInt(e.target.value))} class="input-box"/>
        <br/>
        <label>Street address or P.O. Box</label>
        <input type="text" onChange={(e)=>setAddress(e.target.value)}class="input-box"/>
        <br/>
        <label>ZIP code</label>
        <input type="number" onChange={(e)=>setCode (parseInt(e.target.value))} class="input-box"/>
        <br/>
        <label>Apt, suite, unit, building, floor, etc</label>
        <input type="text" onChange={(e)=>setApt(e.target.value)} class="input-box"/>
        <br/>
        <label>City</label>
        <input type="text" onChange={(e)=>setCity(e.target.value)}class="input-box"/>
        <br/>
        <label>State</label>
        <input type="text" onChange={(e)=>setState(e.target.value)}class="input-box"/>
        <br/>
        <button  onClick={handleClick}>Submit</button>
        </div>
        </div>
 </>
 )}


   export default Orders