import API from "../../API";
import { signInAction, signOutAction, signUpAction } from "./actions";

/*****learn about parse */
const api=new API()
const LOGIN_USER_KEY = "LOGIN_USER_KEY"

export const fetchUserFromLocalStorage = () => {
    return async(dispatch)=>{
        const userJASON = localStorage.getItem(LOGIN_USER_KEY)
        if (userJASON && userJASON.token !== ""){
            dispatch(signInAction(JSON.parse(userJASON)))
        }
    }

}

export const signUp = (user_name,email,password)=>{
    return async(dispatch)=>{
        if (user_name === "" || email === "" || password ===""){
            alert("Please fill out all the fields")
            return false
        }
/*************learn about .then method */
        return api.signUp(user_name,email,password)
        .then((user) => {
            dispatch(signUpAction(user))
            localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(user))
            // dispatch(push("/"))
        })

        .catch((error)=>{
            alert("failed to connect API to signup user ")
        })
    }
}

export const signIn = (email,password)=>{
    return async(dispatch)=>{
        if (email === "" || password ===""){
            alert("Please fill out all the fields")
            return false
        }
        return api 
        .signIn(email,password)
        .then((user) => {
            dispatch(signInAction(user))
            localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(user))
            // dispatch(push("/"))
        })

        .catch((error)=>{
            alert("failed to connect API to signin user ")
        })
    }
}

export const signOut = ()=>{
    return async(dispatch)=>{
        dispatch(signOutAction())
        localStorage.removeItem(LOGIN_USER_KEY)
        // dispatch(push("/signin"))
    }
}