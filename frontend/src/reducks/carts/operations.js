import API from "../../API"
import { fetchCartAction,addCartAction,increaseCartAction,decreaseCartAction } from "./actions"



const api = new API()
export const fetchCart = () =>{
    return async dispatch=>{
        return api
        .getCart()
        .then((carts) => {
            const subtotal = calculateSubtotal(carts.results)
            dispatch(fetchCartAction(carts,subtotal))
        })   
        .catch((error) => {
            alert("Failed to connect API carts")
        })
    }}


export const addCart = (item) =>{
        return async (dispatch, getState)=>{
            return api
            .addCart(item.id)
            .then((addedCart) => {
                let prevCart = getState().carts.list
                let count = getState().carts.count+1
                addedCart["item"]=item
                prevCart.push(addedCart)
                const subtotal = calculateSubtotal(prevCart)
                dispatch(addCartAction(prevCart,subtotal, count))
            })   
            .catch((error) => {
                alert("Failed to connect API carts")
            })
            
    }} 


    export const increaseCart = (cartItem) =>{
        return async (dispatch, getState)=>{
            let prevCart = getState().carts.list
            let matchCart = prevCart.filter((cart)=> cart.id === cartItem)
            let newCount = matchCart[0].quantity +1
            let count = getState().carts.count
            return api
            .updateCart(cartItem,newCount)
            .then((newCart) => {
                prevCart=prevCart.filter((cart) => cart.id !== cartItem)
                prevCart.push(newCart)
                const subtotal = calculateSubtotal(prevCart)
                dispatch(increaseCartAction(prevCart,subtotal, count))
            })   
            .catch((error) => {
                alert("Failed to connect API carts")
            })
    }} 



    export const decreaseCart = (cartItem) =>{
        return async (dispatch, getState)=>{
            let prevCart = getState().carts.list
            let matchCart = prevCart.filter((cart)=> cart.id === cartItem)
            let newCount = matchCart[0].quantity -1
            let count = getState().carts.count
            if (newCount > 0) {
                return api
            .updateCart(cartItem,newCount)
            .then((newCart) => {
                prevCart=prevCart.filter((cart) => cart.id !== cartItem)
                prevCart.push(newCart)
                const subtotal = calculateSubtotal(prevCart)
                dispatch(decreaseCartAction(prevCart,subtotal, count))
            })   
            .catch((error) => {
                alert("Failed to connect API carts")
            })
            }else{
                return api
            .deleteCart(cartItem)
            .then(() => {
                prevCart=prevCart.filter((cart) => cart.id !== cartItem)
                const subtotal = calculateSubtotal(prevCart)
                count = count-1
                dispatch(decreaseCartAction(prevCart,subtotal,count))
            })   
            .catch((error) => {
                alert("Failed to connect API carts")
            })
            }
            
    }} 

    const calculateSubtotal = (cart) =>{
        let subtotal=0
        for(let pizzaItem in cart){
            subtotal += Number(cart[pizzaItem].item.price * cart[pizzaItem].quantity)

    
        }
        return subtotal
    }
        

        