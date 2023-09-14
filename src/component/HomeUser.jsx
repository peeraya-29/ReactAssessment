import { useState, useEffect } from 'react';
import axios from "axios";

const HomeUser = () => {

  const [dataform, setDataform] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setDataform(response.data);
    };

    getData();
  }, []);
  return (
    <>
    <div className='flex justify-center pt-10 '>
     <input className="mx-4 rounded bg-red-100 px-10" type="text" placeholder="name"/>
     <input className="mx-4 rounded bg-red-100 px-10" type="text" placeholder="lastname"/>
     <input className="mx-4 rounded bg-red-100 px-10" type="text" placeholder="Position"/>
     <button className="mx-4 rounded bg-red-300 px-10" >save</button>
     </div>

     <div className='flex justify-center pt-6'>
      <table>
      <thead>
        <th className="mx-12 rounded bg-red-100 px-10">Name</th>
         <th className="mx-12 rounded bg-red-100 px-10">Lastname</th>
         <th className="mx-12 rounded bg-red-100 px-10">Postition</th>
      </thead>
         
         <tbody>
         {dataform.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.lastname}</td>
                  <td>{item.position}</td>
                </tr>
              ))}
         </tbody>
      
      </table>
     </div>
    </>
     
  )
};

export default HomeUser


