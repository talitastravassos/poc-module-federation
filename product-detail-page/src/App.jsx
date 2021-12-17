import { Footer } from "credihome/Footer";
import { Header } from "credihome/Header";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => (
  <div className='container'>
    <Header />
    <h2> Product Page Content</h2>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
