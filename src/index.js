import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCf3_kQC3813AA34XHfonAiOIHekPvXp1A",
  authDomain: "simplemakeup-df154.firebaseapp.com",
  projectId: "simplemakeup-df154",
  storageBucket: "simplemakeup-df154.appspot.com",
  messagingSenderId: "667647273463",
  appId: "1:667647273463:web:48e63256c8d940364026f2"
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
