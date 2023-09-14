import Navbar from "./Navbar"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HomeUser from "./HomeUser"
import HomeAdmin from "./HomeAdmin"

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {
const [show,setShow] = useState ()
const [change,setChange] = useState ('React-Assessment')
  
const Handleuser = () => {
  setShow(<HomeUser Dataprops={mockEmployees}/>);
  setChange('Home-User secter')
}
const HandleAdmin = () => {
  setShow(<HomeAdmin Dataprops={mockEmployees}/>);
  setChange('Home-Admin secter')


}

  return (
    <div 
    className="bg-red-200 min-h-screen">
      <Navbar/>
        <h1 className="text-center pt-20 text-4xl">Generation Thailand </h1>
        <div> 
          <h1 className="text-center pt-20 text-4xl">{change}</h1>
        </div>
        <div className="h-12 border flex iten-center justify-center mt-6">
          <button className="mx-10 rounded bg-red-500 px-10 " onClick={Handleuser}>UserHome Secter</button>
          <button className="mx-10 rounded bg-green-500 px-10 " onClick={HandleAdmin}>AdminHome Secter</button>
        </div>
        <div>
          {show}
        </div>
        
    </div>
    
  )
}



export default Home
