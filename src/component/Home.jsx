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
    <>
      <Navbar/>
        <h1>Generation Thailand </h1>
        <div> 
          <h1>{change}</h1>
        </div>
        <div>
          <button onClick={Handleuser}>UserHome Secter</button>
          <button onClick={HandleAdmin}>AdminHome Secter</button>
        </div>
        <div>
          {show}
        </div>
        
    </>
    
  )
}



export default Home
