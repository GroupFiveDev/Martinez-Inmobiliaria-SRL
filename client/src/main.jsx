import React from 'react'
import App from './App.jsx'
import './index.css'
import './config/firebase/firebase.js'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

console.warn("Hiciste pull y merge origin/develop antes de codear? :)");
console.warn("Hiciste pull y merge origin/develop antes de codear? :)");
console.warn("Hiciste pull y merge origin/develop antes de codear? :)");
console.warn("Hiciste pull y merge origin/develop antes de codear? :)");

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);