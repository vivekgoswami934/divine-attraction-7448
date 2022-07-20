import React from 'react'
    import { Route, Routes } from "react-router-dom";

const Allroutes = () => {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<h1>Home</h1>}  />
        <Route path="/product" element={<h1>product</h1>}  />
        <Route path="/resources" element={<h1>resources</h1>}  />
        <Route path="/about" element={<h1>about</h1>}  />
        <Route path="/community" element={<h1>community</h1>}  />
      </Routes>

      
    </>
  )
}

export default Allroutes
