import { useState } from 'react'
import './App.css' 


import Home from './component/Home'
import Men from './component/Men'
import Women from './component/Women' 
import New from './component/New'

import { Route, Routes } from 'react-router-dom'
import Layout from './component/Layout'



function App() {

  return (
    <>
      <h1> app jsx in react project . </h1>  

      <Routes>

          <Route path="/" element={<Layout />}>

            <Route index element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/new" element={<New />} />

          </Route>

        </Routes>  
    </>
  )
}

export default App


