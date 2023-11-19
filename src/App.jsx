import React from 'react'
import NavBar from './components/navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes } from 'react-router-dom'
const App = () => {

  

 
  return (
    <div>
      
     <NavBar/>
    
     <ItemListContainer greeting={"Bienvenido"}/>

     
    </div>
  )
}

export default App