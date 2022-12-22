import API from "../../API"
import { addOrderAction,clearCheckoutOrderErrorAction } from "./actions"



const api = new API()
export const addOrder = (addCartBody) => {
    return async dispatch=>{
        return api
        .orderAdd(addCartBody)
        .then(() => {

            dispatch(addOrderAction());
           
        })   
        .catch((error) => {
            alert('Please Fill the Required');
        })
    }}