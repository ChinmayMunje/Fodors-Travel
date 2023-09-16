import React from 'react'
import { Route, Routes } from "react-router-dom"
import SearchResultList from '../pages/SearchResultList'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import TourDetails from '../pages/TourDetails'
import Tour from "../pages/Tour";
import ThankYou from '../pages/ThankYou'


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tour />} />
            <Route path="/tours/search" element={<SearchResultList />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/thank-you" element={<ThankYou/>}/>
            <Route path="/register" element={<Register />} />

        </Routes>
    )
}

export default Routers