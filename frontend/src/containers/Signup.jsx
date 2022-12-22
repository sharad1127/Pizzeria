import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import main_img from '../assets/img/Mask Group 2.png'
import Header from '../components/common/Header';
import {signUp} from '../reducks/users/operations'
import {Link, useNavigate} from "react-router-dom"


function Signup(props) {
    const dispatch = useDispatch()
    const [user_name, setUserName] = useState('')
    const [email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()
  
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(signUp(user_name, email, password))
        navigate("/")

    }
    return (
        <>
        <section id="signin">
<Header />
<div class="img">
   <img src={main_img} alt="pizza" />
    <div class="text">
      <h1>Dino’s Pizzeria</h1>
      <h3>Pizza is our superpower.</h3>
    </div>
  </div>

   <div class="container">
            <form class="singup-page">
                
                <h1>Dino's pizzeria</h1>
                <h3>Sign Up</h3>

                <label for="name">Name</label>
                <input type="name" class="input-box" placeholder="User Name" onChange={(e)=>setUserName(e.target.value)} />
                <label for="email">Email</label>
                <input type="email" class="input-box" placeholder="User Email address" onChange={(e)=>setEmail(e.target.value)} />
                <label for="password">Password</label>
                <input type="password" class="input-box" placeholder="Type your password"  onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={(e)=>handleClick(e)}>SING UP</button>
                <h2>Already have an account? </h2>
                <Link to='/signin' className='sign-up-link'>Login</Link>
        
            </form>
        </div>
        </section>
        </>
    );
}

export default Signup