import { Route, Routes } from 'react-router-dom';
import Carts from './containers/Carts';
import Home from './containers/Home';
import Orders from './containers/Orders';
import Signin from './containers/Signin'
import Signup from './containers/Signup'
import Thanks from './containers/Thanks';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path= "/carts" element={<Carts/>} />
            <Route path= "/orders" element={<Orders/>} />
            <Route path= "/signin" element={<Signin/>} />
            <Route path= "/signup" element={<Signup/>} />
            <Route path= "/thanks" element={<Thanks/>} />
        </Routes>
    );
};
export default Router;
