import { Navbar } from "product_detail_page/Navbar";
import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./index.css";

const App = () => (
  <div className='container'>
    <Header />
    <Navbar />
    <h2> Home Page Content</h2>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
