import React, {useState} from 'react'
import { Steps, Button,message, Input, Checkbox  } from 'antd'
import {Modal, Row, Col, Form,Image, FormGroup} from 'react-bootstrap';
import '../App.css' 



const {Step} = Steps;


const steps = [

  {
    title:'Basic Details',
 
  }, 

  {
    title:'Expereance',
 
  },

]


function AddCv({addCv}) {

    const [current, setCurrent]=useState(0);

    const [firstname, setFirstname]= useState('');
    const [lastname, setLastname]= useState('');
    const [address, setAddress]= useState('');
    const [mobile, setMobile]= useState('');
    const [email, setEmail]= useState(''); 

    const [companyname, setCompanyname]= useState('');
    const [projects, setProjects]= useState('');
    const [howmanyyears, setHowmanyYears]= useState('');
    const [technology1, setTechnology1]= useState('');
    const [technology2, setTechnology2]= useState('');
    
     

    const next =()=>{
      setCurrent(current+1);
    }
    
    const prev =()=>{
      setCurrent(current-1);
      
    }
    
    const onSubmit= (e)=>{
        e.preventDefault();

        addCv({firstname ,lastname, address, mobile, email, companyname, projects, howmanyyears, technology1, technology2});
          
    }
  
    return (
      <form> 
    <div className='container'>
       <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))} 
        </Steps> 
  
        <div className="steps-content">
          
          {current===0 && (
          <div> 
           <h1>Basic Details</h1>
           <div className='row'>
            
            <div className='col-md-6'>
                 
           
            <div className="form-group" style={{marginBottom:15}}>
                <p style={{textAlign : 'start', marginLeft:5}}>First Name:</p>
                <input value={firstname} onChange={(e)=> setFirstname(e.target.value)} className="form-control" type="text" placeholder="Add book name"/>
           </div>  

           <div className="form-group" style={{marginBottom:15}}>
                <p style={{textAlign : 'start', marginLeft:5}}>Last Name:</p>
                <input value={lastname} onChange={(e)=> setLastname(e.target.value)} className="form-control" type="text" placeholder="Add book name"/>
           </div> 

           <div className="form-group" style={{marginBottom:15}}>
                <p style={{textAlign : 'start', marginLeft:5}}>Address:</p>
                <input value={address} onChange={(e)=> setAddress(e.target.value)} className="form-control" type="text" placeholder="Add book name"/>
           </div> 

           <div className="form-group" style={{marginBottom:15}}>
                <p style={{textAlign : 'start', marginLeft:5}}>Mobile</p>
                <input value={mobile} onChange={(e)=> setMobile(e.target.value)} className="form-control" type="text" placeholder="Add book name"/>
           </div> 

           <div className="form-group" style={{marginBottom:15}}>
                <p style={{textAlign : 'start', marginLeft:5}}>Email</p>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" type="text" placeholder="Add book name"/>
           </div> 

              
               
            </div>
       
  
           </div>
           </div>
          
          )} 
          
          
          {current === 1 && (
          
          
            <div className='row'>
             <div className='col-md-6'>
              
             <div className="form-group" style={{marginBottom:15}}>
                <p style={{textAlign : 'start', marginLeft:5}}>Company Name:</p>
                <input value={companyname} onChange={(e)=> setCompanyname(e.target.value)} className="form-control" type="text" placeholder="Add book name"/>
           </div>   

           <div className="form-group" style={{marginBottom:15}}>
                <p style={{textAlign : 'start', marginLeft:5}}>Preojects:</p>
                <input value={projects} onChange={(e)=> setProjects(e.target.value)} className="form-control" type="text" placeholder="Add book name"/>
           </div>  

           <div className="form-group" style={{marginBottom:15}}>
                <p style={{textAlign : 'start', marginLeft:5}}>How many years:</p>
                <input value={howmanyyears} onChange={(e)=> setHowmanyYears(e.target.value)} className="form-control" type="text" placeholder="Add book name"/>
           </div>  

           <div className="form-group" style={{marginBottom:15}}>
                <p style={{textAlign : 'start', marginLeft:5}}>Technology 1:</p>
                <input value={technology1} onChange={(e)=> setTechnology1(e.target.value)} className="form-control" type="text" placeholder="Add book name"/>
           </div>  

           <div className="form-group" style={{marginBottom:15}}>
                <p style={{textAlign : 'start', marginLeft:5}}>Technology 2:</p>
                <input value={technology2} onChange={(e)=> setTechnology2(e.target.value)} className="form-control" type="text" placeholder="Add book name"/>
           </div>  


             </div>
             <div className='col-md-6'></div>

            </div>
          
          
          
          )} 
          
          
        
          
          
          </div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button onClick={onSubmit} >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: '0 8px',
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
    </div>
    </form>
    );
  } 


  export default AddCv