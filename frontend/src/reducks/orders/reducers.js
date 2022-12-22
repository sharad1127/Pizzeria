import { bindActionCreators } from "redux";
import initialState from "../store/initialState";
import * as Actions from "./actions"

export const orderReducer = (state = initialState.order, action)=>{
    switch (action.type){
        case Actions.ADD_ORDER:
            return{
                // ...state,
                list:action.payload
            }
        // case Actions.CLEAR_CHECKOUT_ORDER_ERROR: {
        //     return {
        //         errors:  {
        //             customer_name : null,
        //             phone : null,
        //             address : null,
        //             pin_code : null,
        //             city: null,
        //             state: null,
        //         }
        //     }
        // }
            default:return state
    }
}