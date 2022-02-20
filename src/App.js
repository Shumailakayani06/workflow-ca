
import './App.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
const url = ('http://localhost:1337/api/workers');




function App() {
  const [workers,setWorker] = useState([]);
  useEffect(()=>{
    async function getData(){
      const response = await axios.get(`${url}`);
      const workersArray = response.data.data;
    
      setWorker(response.data.data);
      
      console.log(workersArray);

    }
    getData();
  },[]);
  return (
    
    <div className="App">
     
     <ul className='workerUl'>
     {workers.map((employe,index) => (
      
            <li key={index}>
              <h1>{employe.attributes["name"]}  {employe.attributes["lastname"]}</h1>
              
              <p>email: {employe.attributes["email"]}</p>
              <p>Profession: {employe.attributes["profession"]}</p>
              </li>
         
            
           
          ))}
          </ul>
    </div>
  );
}

export default App;
