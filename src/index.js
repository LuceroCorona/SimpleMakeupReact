import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfb6B7dXvO6hBibG960Cf0c1KIIz-g9OA",
  authDomain: "comiendopasto-rjs.firebaseapp.com",
  projectId: "comiendopasto-rjs",
  storageBucket: "comiendopasto-rjs.appspot.com",
  messagingSenderId: "319780112765",
  appId: "1:319780112765:web:4af9d12e7a27a931c2a414"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
