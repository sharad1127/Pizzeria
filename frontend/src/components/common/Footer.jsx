import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { getSubtotal } from '../../reducks/carts/selectors'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function Footer({setBtn,btn}) {
  const subTotal = useSelector((state)=>state.carts.subtotal)
  const [url, setUrl] = useState('')
  let {abc} = useParams()
  useEffect(()=>{
    setUrl(abc)
    console.log(url)
  }, [abc])

  return (
    <>
     <footer>
    <div class="total">
      <h2>Subtotal: ${subTotal}</h2>
      <div onClick={()=> setBtn(false)}>

        {
          btn ?
                <Link to = "/carts">
                <button class="add-cart">Check selected items</button>
                </Link> :
                <Link to = "/orders">
                <button class="add-cart" >Check out</button>
                </Link>
               

        }


      </div>
    </div>
  </footer>
      
    </>
  )
}

