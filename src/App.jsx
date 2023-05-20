import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Cart from './components/Cart'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './assets/fonts/Poppins-Regular.ttf';
import './assets/fonts/Poppins-Medium.ttf';
import './assets/fonts/Poppins-Bold.ttf';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/cart' element = {<Cart />}/>
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
