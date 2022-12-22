export const FETCH_CART = 'FETCH_CART'
export const fetchCartAction  = (carts, subtotal) =>{
   return {
    type:'FETCH_CART',
    count:carts.count,
    payload:carts.results,
    subtotal: subtotal
   }
}


export const ADD_CART = 'ADD_CART'
export const addCartAction  = (carts, subtotal, count) =>{
   return {
    type:'ADD_CART',
    count:count,
    payload:carts,
    subtotal: subtotal
   }
}


export const INCREASE_CART = 'INCREASE_CART'
export const increaseCartAction  = (carts, subtotal, count) =>{
   return {
    type:'INCREASE_CART',
    count:count,
    payload:carts,
    subtotal: subtotal
   }
}

export const DECREASE_CART = 'DECREASE_CART'
export const decreaseCartAction  = (carts, subtotal, count) =>{
   return {
    type:'DECREASE_CART',
    count:count,
    payload:carts,
    subtotal: subtotal
   }
}

