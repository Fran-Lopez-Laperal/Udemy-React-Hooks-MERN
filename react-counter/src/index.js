import React from "react"
import ReactDOM  from "react-dom"
import PrimeraApp from "./PrimeraApp"
import './index.css'




const divRoot = document.querySelector('#root')

ReactDOM.render(<PrimeraApp name='fran' edad='23'/>, divRoot)