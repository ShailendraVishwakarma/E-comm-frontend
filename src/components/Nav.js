import React, { useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';
 

// import { Link } from 'react-router-dom';
const Nav=()=>{
    const auth=localStorage.getItem('user');
    const Navigate=useNavigate();
    const logout = ()=>{
        localStorage.clear();
        Navigate('/signup');
    }
    return(
        <div>
            <img src="https://yt3.googleusercontent.com/ytc/AGIKgqOpew-op5VY99ZRjdyeRUHl3HeeBJFV5hJ7gUo4TA=s900-c-k-c0x00ffffff-no-rj" alt="logo"
            className='logo' />
           { auth ? <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
                
            </ul>
            :   
            <ul className="nav-ul nav-right">
                 <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/login">Login</Link></li> 
            </ul>
            }
        </div>
    ) 
} 
export default Nav;