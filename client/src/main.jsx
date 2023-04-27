import React from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API
// axios.defaults.baseURL = "http://localhost:3001";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);