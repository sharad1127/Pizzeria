export const ADD_ORDER = 'ADD_ORDER'
export const addOrderAction  = (orders) =>{
   return {
    type:'ADD_ORDER',
    payload:orders,
   }
}

