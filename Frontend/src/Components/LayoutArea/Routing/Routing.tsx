import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authStore } from "../../../Redux/Store";
import authService from "../../../Services/AuthService";
import About from "../../AboutArea/About/About";
import Login from "../../AuthArea/Login/Login";
import Logout from "../../AuthArea/Logout/Logout";
import Register from "../../AuthArea/Register/Register";
import Home from "../../HomeArea/Home/Home";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import Page404 from "../Page404/Page404";

function Routing(): JSX.Element {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(()=>{
        const unsubcribeMe = authStore.subscribe(()=>{
            setIsLoggedIn(authService.isLoggedIn());
        });
        return () => unsubcribeMe();
    }, []);

    return (
        
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/products" element={<ProductList/>}/>
            <Route path="/products/details/:id" element={<ProductDetails/>}/>
            <Route path="/products/new" element={ isLoggedIn ? <AddProduct/> : <Navigate to="/login" />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>

            {/*defualt page*/}
            <Route path="/" element={<Navigate to="/home" />}/>

            {/* page not found route - must be last route: */}
            <Route path="*" element={<Page404/>}/>
        </Routes>
    
    );
}

export default Routing;
