import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
import { BrowserRouter } from 'react-router-dom';


// ReactDOM.render is deprecated use ReactDOM.createRoot instead
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);