const initialState = {
  
    user: {
        user_name:"",
        email:"",
        token:"",
        token_expires_at:"",

    },

    item: {
        list:[]
    },

    order: {
        list: [],
        subtotal: 0
    },

    cart: {
        count:0,
        list : [],
        subtotal: 0
    }

};

export default initialState;
