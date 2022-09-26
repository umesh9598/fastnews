// import axios from "axios"
import React  from 'react'
// import {useState,useEffect }  from 'react'
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import './App.css';

import Headlines from './components/Headlines';
import Sports from './components/Sports';
import Politics from './components/Politics';
import Finance from './components/Finance';

function App() {
//  const [newsState, setNewsState]= useState([]);
//   useEffect(()=>{
//    const fetchNews=async()=>{
//     let getNews= await axios.get("https://newsapi.org/v2/everything?q=Apple&from=2022-09-22&sortBy=popularity&apiKey=478103364fe54ef1a36a2bb9cbdf06d2")
//     console.log(getNews)
//     setNewsState(getNews)
//    }
//    fetchNews()
//   },[])
  return (
    <>
    <div className="App">
    <Navbar/>
    {/* <Headlines/> */}
    {/* <Sports/> */}
    <Routes>
        <Route exact path="/" element={<Headlines />} />
        <Route exact path="/sports" element={<Sports />} />
        <Route exact path="/politics" element={<Politics />} />
        <Route exact path='/finance' element={<Finance/>}></Route>
       
      </Routes>
    </div>
    </>
  );
}

export default App;
