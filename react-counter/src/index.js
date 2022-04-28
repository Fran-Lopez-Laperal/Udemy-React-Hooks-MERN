


import React from "react"
import {createRoot} from "react-dom/client"
import './index.css'
import CounterApp from "./CounterApp"




const divRoot = document.querySelector('#root')
const root = createRoot(divRoot)

root.render(<CounterApp value={10} />)