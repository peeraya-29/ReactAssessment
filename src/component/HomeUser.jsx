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
    <div>
     <input type="text" placeholder="name"/>
     <input type="text" placeholder="lastname"/>
     <input type="text" placeholder="Position"/>
     <button>save</button>
     </div>

     <div>
      <table>
      <thead>
        <th>Name</th>
         <th>Lastname</th>
         <th>Postition</th>
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


