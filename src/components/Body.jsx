import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx"
import HomePage from "./HomePage/Body.jsx";
import PropertyDetailPage from "./PropertyDetailPage/Body.jsx";
import LoginPage from "./LoginPage/Body.jsx";

const Body = () => {
    return (
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/propertydetailpage" element={<PropertyDetailPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
            </Routes>
        </Router>
    );
};

export default Body;