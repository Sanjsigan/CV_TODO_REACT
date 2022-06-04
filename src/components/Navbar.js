import React from 'react'
import {Link} from 'react-router-dom'


function Navbar (){
    return(
    <nav className="navbar navbar-dark bg-dark">
       <Link className="navbar-brand nav-link" to="/"> 
        Cv Management        
       </Link>
       <Link className="navbar-brand nav-link" to="/addcv"> 
      <button className='btn btn-primary' >Add</button>
       </Link> 
       <Link className="navbar-brand nav-link" to="/cvlist"> 
          Cv list
       </Link>

    </nav>
    )
}

export default Navbar