import initialState from "../store/initialState";
import * as Actions from "./actions"

export const cartReducer = (state = initialState.cart, {payload, subtotal, type, count})=>{
    switch (type){
        case Actions.FETCH_CART:
            return{
                count:count,
                list:payload,
                subtotal:subtotal
            }
            case Actions.ADD_CART:
            return{
                count: count,
                list:payload,
                subtotal:subtotal
            }
            case Actions.INCREASE_CART:
            return{
                count:count,
                list:payload,
                subtotal:subtotal
            }
            case Actions.DECREASE_CART:
            return{
                count:count,
                list:payload,
                subtotal:subtotal
            }
            default:return state
            
        
    }
}

