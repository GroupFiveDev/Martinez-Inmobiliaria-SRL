import React from 'react'
import App from './App.jsx'
import './config/firebase/firebase.js'
import './index.css'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './context/authContext.jsx';
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);