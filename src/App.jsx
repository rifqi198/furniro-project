import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Contact from './pages/Contact/Contact'
import Compare from './pages/Compare/Compare'
import './App.css'
function App() {

  return (
      <Router>
          <Layout>
            <Routes>
              <Route exact path='/' Component={Home} />
              <Route path='/shop' Component={Shop} />
              <Route path='/product/:id' Component={Product}/>
              <Route path='/cart' Component={Cart}/>
              <Route path='/checkout' Component={Checkout}/>
              <Route path='/contact' Component={Contact}/>
              <Route path='/compare/:id' Component={Compare}/>
            </Routes>
          </Layout>
      </Router>
  )
}

export default App
