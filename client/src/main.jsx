import React from 'react'
import App from './App.jsx'
import './config/firebase/firebase.js'
import './index.css'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './context/authContext.jsx';
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);