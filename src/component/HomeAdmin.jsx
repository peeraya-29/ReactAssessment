import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";



const HomeAdmin = () => {
  const [dataform, setDataform] = useState ([])
  const [name,setName] = useState('')
  const [lastname,setLastname] = useState('')
  const [position,setPosition] = useState('')
  const [reload,setReload] = useState(false)
  
  const creatUserhere = async (name,lastname,position) => {
 
    const response = await axios.post ('https://jsd5-mock-backend.onrender.com/members',

      {
        name: name,
        lastname: lastname,
        position: position

      }
      )
      if(response === 200) {
        setDataform(response.data)
      }
      setReload(!reload)
  
  }
const deleteform = async (id)=>{
  
  const response = await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`,
  {
    id: id,
  }
  )
  setReload(!reload)

}
useEffect(() => {
    const getData = async() => {
      const response = await axios.get('https://jsd5-mock-backend.onrender.com/members');
  
      setDataform(response.data)
    };

    getData();
  }, [reload]);
  return (
    <>
    <div>
     <input onChange={(e)=> {setName(e.target.value)}} type="text" placeholder="name"/>
     <input onChange={(e)=> {setLastname(e.target.value)}} type="text" placeholder="lastname"/>
     <input onChange={(e)=> {setPosition(e.target.value)}} type="text" placeholder="Position"/>
     <button onClick={()=> {creatUserhere(name,lastname,position)}} > save</button>
     
     </div>

     <div>
      <table>
      <thead>
        <th>Name</th>
         <th>Lastname</th>
         <th>Postition</th>
         <th>Action</th>

      </thead>
         
         <tbody>
         {dataform.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.lastname}</td>
                  <td>{item.position}</td>
                  <td> 
                  <button onClick={()=>{deleteform(item.id)}} type="button">Delete</button>
                  </td>
                </tr>
              ))}
         </tbody>
      
      </table>
     </div>
    </>
     
  )
};

export default HomeAdmin