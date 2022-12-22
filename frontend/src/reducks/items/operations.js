import API from "../../API"
import { fetchItemAction } from "./actions"


const api = new API()
export const fetchItem = () =>{
    return async dispatch=>{
        return api
        .getItems()
        .then(items => dispatch(fetchItemAction(items)))
        .catch((error)=> {
            alert("Field to connect API items")
        })

    }

    
}