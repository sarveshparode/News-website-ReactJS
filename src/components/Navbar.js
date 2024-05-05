import React from 'react'
import {Link} from "react-router-dom";



const Navbar =()=> {
 
  
    return (
      <div>
            <nav className="navbar fixed-top navbar-expand-lg   navbar-dark bg-danger">
                    <div className="container-fluid">
                    <img src='./images/5.png'   width={85} height={40}/>
                    {/* <Link classname="navbar-brand" to="/">NewsMonkey</Link> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className=" navbar-nav mr-auto mb-2 mb-lg-0">
                    {/* <li className="nav-link"><Link classname='nav-link'  to="/home">Home</Link></li> */}
                        {/* <li className="nav-link"><a classname='nav-link'  to="/About">About</a></li> */}
                        <li className="nav-link"><Link className='nav-link active' to="/Business">Business</Link></li>
                        <li className="nav-link"><Link className='nav-link active'  to="/Entertainment">Entertainment </Link></li>
                        <li className="nav-link"><Link className='nav-link active'  to="/General">General</Link></li>
                        <li className="nav-link"><Link className='nav-link active'  to="/Health">Health </Link></li>
                        <li className="nav-link"><Link className='nav-link active'  to="/Science">Science </Link></li>
                        <li className="nav-link"><Link className='nav-link active'  to="/Sports">Sports </Link></li>
                        <li className="nav-link"><Link className='nav-link active'  to="/Technology">Technology </Link></li>
                         
                     </ul>
                    </div>
                </div>
    </nav>
      </div>
    )

}

export default Navbar
