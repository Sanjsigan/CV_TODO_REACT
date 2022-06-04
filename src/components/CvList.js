import React,{useState,UseEffect} from 'react'
import { Card } from 'antd';
import '../App.css'

 


function CvList({cvList,ondelete}) {

     

return (
     <>
     
     {cvList.length > 0 ? 
      <div className='container'> 

      <h1 className='text-center'>List of cv</h1>  
       

       <div > 

       {cvList.map((cv)=>(
             <Card
             key={cv.id}
             style={{  
               width: '80%',
               marginBottom:2
               
     
             }}
           
             title= {<> <b>{cv.firstname}</b>  <b>{cv.lastname}</b></>}
             extra={<a className='btn btn-danger' onClick={()=>ondelete(cv.id)}>Delete</a>}
           >
         <div className='row'> 
         <div className='col-md-6'>
             <h3 style={{marginBottom:30}}>Basic Details</h3>
         <div className='row detail'>
        <div className='col-md-4'><b>First Name:</b></div>
        <div className='col-md-4'>{cv.firstname}</div>
        </div>
    
    <div className='row detail'>
        <div className='col-md-4'><b>Last Name:</b></div>
        <div className='col-md-4'>{cv.lastname}</div>
    </div>
    
    <div className='row detail'>
        <div className='col-md-4'><b>Address:</b></div>
        <div className='col-md-4'>{cv.address}</div>
    </div>
    
    <div className='row detail'>
        <div className='col-md-4'><b>Mobile</b></div>
        <div className='col-md-4'>{cv.mobile}</div>
    </div>
    
    <div className='row detail'>
        <div className='col-md-4'><b>Email</b></div>
        <div className='col-md-4'>{cv.email}</div>
    </div>
    </div> 


    <div className='col-md-6'>
    <h3 style={{marginBottom:30}}>Expreance</h3>
    <div className='row detail'>
        <div className='col-md-4'><b>Company Name:</b></div>
        <div className='col-md-4'>{cv.companyname}</div>
        </div>
    
    <div className='row detail'>
        <div className='col-md-4'><b>Projects:</b></div>
        <div className='col-md-4'>{cv.projects}</div>
    </div>
    
    <div className='row detail'>
        <div className='col-md-4'><b>How Many Years:</b></div>
        <div className='col-md-4'>{cv.howmanyyears}</div>
    </div>
    
    <div className='row detail'>
        <div className='col-md-4'><b>Technology1</b></div>
        <div className='col-md-4'>{cv.technology1}</div>
    </div>
    
    <div className='row detail'>
        <div className='col-md-4'><b>Technology2</b></div>
        <div className='col-md-4'>{cv.technology2}</div>
    </div>
    </div>
         
          </div>
        

    
           </Card>  
     
       ))}
    
    
      </div>

     
     </div>
     : <h3 style={{textAlign:'center'}}>No Cv..!!</h3>
    }
    
     </>
)

} 

export default CvList