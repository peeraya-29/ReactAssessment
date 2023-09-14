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
    <div className='flex justify-center pt-10 '>
     <input className="mx-4 rounded bg-red-100 px-10" onChange={(e)=> {setName(e.target.value)}} type="text" placeholder="name"/>
     <input className="mx-4 rounded bg-red-100 px-10" className="mx-4 rounded bg-red-100 px-10" onChange={(e)=> {setLastname(e.target.value)}} type="text" placeholder="lastname"/>
     <input className="mx-4 rounded bg-red-100 px-10" onChange={(e)=> {setPosition(e.target.value)}} type="text" placeholder="Position"/>
     <button className="mx-4 rounded bg-red-100 px-10" onClick={()=> {creatUserhere(name,lastname,position)}} className="mx-4 rounded bg-red-300 px-10"> save</button>
     
     </div>

     <div  className='flex justify-center pt-10 '>
      <table >
      <thead >
        <th className="mx-4 rounded bg-red-100 px-10" >Name</th>
         <th className="mx-4 rounded bg-red-100 px-10" >Lastname</th>
         <th className="mx-4 rounded bg-red-100 px-10" >Postition</th>
         <th className="mx-4 rounded bg-red-100 px-10" >Action</th>

      </thead>
         
         <tbody >
         {dataform.map((item) => (
                <tr className="mx-4 rounded bg-red-100 px-10"  key={item.id}>
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