import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

// ReactDOM.render is deprecated use ReactDOM.createRoot instead
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <StrictMode>
        <App/>
    // </StrictMode>
);