import axios from 'axios';
const LOGIN_USER_KEY = 'LOGIN_USER_KEY';

let baseURL;
// if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
//     baseURL = process.env.REACT_APP_API_BASE_URL;
// } else {
//     baseURL = 'http://127.0.0.1:8000';
// }
baseURL = 'https://pizzeria-backend.viola-ivolga.repl.co/'

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
   
    }
});

api.interceptors.request.use(
    config => {
        if (localStorage.getItem(LOGIN_USER_KEY)) {
            config.headers.common['Authorization'] = JSON.parse(localStorage.getItem(LOGIN_USER_KEY)).token;
        }

        return config;
    },
    err => {
        console.error(err);
    }
);

export default class API {
  
    signUp = async(user_name,password,email) =>{
        const signup = await api
        .post("signup/",{
            user_name:user_name, password:password, email:email
        })
        .then((response)=>{
            return response.data
        })

        .catch((error)=>{
            throw new Error(error)
        })

    return signup 
    }



    signIn = async(email, password) =>{
        const signin = await api
        .post("signin/",{
             password:password, email:email
        })
        .then((response)=>{
            return response.data
        })

        .catch((error)=>{
            throw new Error(error)
        })
        
    return signin
    }


    getUser = async() =>{
        const user = await api
        const url=''
        .get(url)
       
        .then((response)=>{
            return response.data
        })

        .catch((error)=>{
            throw new Error(error)
        })
        
    return user
    }
        getItems = async params => {
        try {
            const response = await api.get('items/', { params });
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    };


    getCart = async () => {
        try {
            const response = await api.get('carts/');
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    };
    addCart = async params => {
        try {
            const response = await api.post('carts/add/', {
                'quantity':1,
                'item':params } ) ;
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    };

    updateCart = async (cartItem,newCount) => {
        try {
            const response = await api.put('carts/update/'+ cartItem + '/' , {quantity:newCount} );
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    };
    deleteCart = async (cartItem) => {
        try {
            const response = await api.delete('carts/delete/'+ cartItem + '/' );
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    };

    orderAdd = async ({name, num, address, code,apt,city,state, subtotal}) => {
        let user_id = JSON.parse(localStorage.getItem('LOGIN_USER_KEY')).id
        try {
            const response = await api.post('orders/add/', 

    {
        "total_price": subtotal,
        "full_name":name,
        "phone_number":num,
        "address_line1": address,
        "postal_code": code,
        "address_line2": apt,
        "city": city,
        "user": user_id,
        "state": "washington",
    }
     ) ;
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    };  
}


