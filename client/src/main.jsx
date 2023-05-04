import React from 'react'
import App from './App.jsx'
import './index.css'
import './config/firebase/firebase.js'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import onAuthStateChanged, { auth } from './config/firebase/firebase.js';

onAuthStateChanged(auth, async (user) => {
  if (user) {
    console.log(user);
  } else {
    console.log("no esta logueado");
  }
})
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);