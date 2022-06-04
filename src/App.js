import React, {useState} from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar'
import AddCv from './components/AddCv'
import CvList from './components/CvList'


function App() { 

  const [CvLists , setCvList]=useState([

    { 
        id:1,
        firstname:'Sanjsigan',
        lastname :'Rajendram',
        address :'Colombo',
        mobile:'054125',
        email:'sanjsigan@gmail.com',

        companyname :'maestreo',
        projects :'23',
        howmanyyears :'1 1/2',
        technology1: 'react',
        technology2 :'.net'
      
      },
  
      { 
          id:2,
          firstname:'asa',
          lastname :'sas',
          address :'sasa',
          mobile:'sasa',
          email:'sassa@gmail.com',

          companyname :'maestreo',
          projects :'23',
          howmanyyears :'1 1/2',
          technology1: 'react',
          technology2 :'.net'
        
        }
  
    ])
   

    const addCv = (cv)=>{
      const id = Math.floor(Math.random()*10000)+1

      const newCv ={id, ...cv}
      setCvList([...CvLists, newCv]);
    }

    const deleteCv =(id)=>{
      if(window.confirm('Are you sure you wish to delete this item'))
       setCvList(CvLists.filter((book)=>book.id !== id))
    }


  return (
  
    <Router>
     <div>
    <Navbar/>
    <Routes>
      
    <Route path="/cvlist" element={<CvList cvList={CvLists} ondelete={deleteCv}/>}/>
    <Route path="/addcv"  element={<AddCv   addCv={addCv}/>} /> 
   
    </Routes>
     </div>
  
     </Router>
       
  );
}

export default App;
