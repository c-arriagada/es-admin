import React, { Component } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/Login';
import './styles.css'

function App() {

    let callback = window.location.search;

    return (
        callback ? <Home/> : <Login/>
        )
}

export default App;