import { useState } from "react"
import "./App.css"
import Button from "./Functional"
import Functional from "./Functional"
import WelcomeMessage from "./WelcomeMessage"

function App(){

   const description = "JSX allows us to write HTML-like code inside JavaScript and use dynamic data easily."

  return(

    <>
    <Functional props="chintan"/>
    <WelcomeMessage/>
    </>

  )
}

export default App