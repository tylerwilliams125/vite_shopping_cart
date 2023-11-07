import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import CartList from './CartList'

function App() {
   //React hooks are immutable
  //Often times we will make a copy of the data, modify it, and then set the state to the copy 

  //the useEffect hook is used to load data from an API
  return(
    <>
     <CartList/>
    </>
  )
}

export default App
