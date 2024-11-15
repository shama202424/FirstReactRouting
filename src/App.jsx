import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom"
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Layout from "./Components/Layout/Layout"



export default function App() {
  let x = createHashRouter([
    {path:'',element:<Layout/>,
      children:[
      {index:true,element:<Home/>},
      {path:'About',element:<About/>},
      {path:'Portfolio',element:<Portfolio/>},
      {path:'Contact',element:<Contact/>},
    ]}
  ])
  return (
<RouterProvider router={x}></RouterProvider>
  )
}

