import React from 'react'
import ReactDOM from 'react-dom'
// S6.L33.1.
import { BrowserRouter } from 'react-router-dom'
import Main from './Components/Main'
import './Styles/Styles.css'

// S6.L33.2.
// wrap our application in the BrowserRouter component
ReactDOM.render(
  <BrowserRouter><Main /></BrowserRouter>, 
  document.getElementById("root")
)
