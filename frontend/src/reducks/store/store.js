import {applyMiddleware, combineReducers, compose, legacy_createStore as reduxCreateStore} from "redux"
import { UserReducer } from "../users/reducers"
import { itemReducer } from "../items/reducers"
import {orderReducer} from "../orders/reducers"
import {cartReducer} from "../carts/reducers"
import thunk from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'



export default function createStore(history){
  return reduxCreateStore(
    combineReducers({
      users: UserReducer,
      items: itemReducer,
      orders: orderReducer,
      carts: cartReducer,

    }),
    composeWithDevTools(
      applyMiddleware( thunk)
    )
  )
}

















// import {
//   applyMiddleware,
//   combineReducers,
//   createStore as reduxCreateStore,

//   /***********************See why it's crossed */
// } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { logger } from 'redux-logger';
// import thunk from 'redux-thunk';

// import { PostsReducer } from '../posts/reducers';

// const rootReducer = combineReducers({
//   posts: PostsReducer,
// });

// export default function configureStores(preloadedState) {
//   const middlewares = [logger, thunk];
//   const middlewareEnhancer = applyMiddleware(...middlewares);

//   const enhancers = [middlewareEnhancer];
//   const composedEnhancers = composeWithDevTools(...enhancers);

//   const store = configureStore(rootReducer, preloadedState, composedEnhancers);

//   return store;
// }
