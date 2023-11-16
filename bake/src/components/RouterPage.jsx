import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
import App from '../App';
import AboutUsPage from './AboutUsPage';
import ShopPage from './ShopPage';
import AccountPage from './AccountPage';
import CartPage from './CartPage';
import CheckOutPage from './CheckOutPage';
import ContactPage from './ContactPage';
import BlogPage from './BlogPage';
import ErrorPage from './ErrorPage';





const RouterPage = () => {
  return (
   <Router>
    <Routes>

    <Route path='/' element={<App/>}/>
    <Route path='/aboutUs' element={<AboutUsPage/>}/>
    <Route path='/shop' element={<ShopPage/>}/>
    <Route path='/cart' element={<CartPage/>}/>
    <Route path='/checkOut' element={<CheckOutPage/>}/>
    <Route path='/myAccount' element={<AccountPage/>}/>
    <Route path='/blog' element={<BlogPage/>}/>
    <Route path='/contactUs' element={<ContactPage/>}/>
    <Route path='*' element={<ErrorPage/>}/>





    </Routes>
   </Router>
  )
}

export default RouterPage
