import { useState } from "react"
import "./App.css"
import Button from "./Button"

function App(){

   const description = "JSX allows us to write HTML-like code inside JavaScript and use dynamic data easily."

  return(

    <>
    <h1>welcome to jsx</h1>
    <p>{description}</p>
    <Button/>
    </>

  )
}

export default App