import React,{ useState,useEffect,useSelector }  from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TfiMenu } from "react-icons/tfi";
import { Link } from 'react-router-dom';

import {useDispatch} from "react-redux"

function Header() {
  const [HiddenLink, setHiddenLink] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  // const loginSelector = useSelector((state) => state.loginReducer);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLogin(!!token);  // Update isLogin based on whether the token exists
  }, []);

  const handleLogin = async () => {
    // Assuming you have a successful login and received a token
    // You would store the token in localStorage here
    const token = 'YOUR_TOKEN';  // Replace with the actual token received from the API
    localStorage.setItem('token', token);
    
    // Update isLogin to indicate the user is logged in
    setIsLogin(true);
  };

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    setIsLogin(false);  // Update isLogin to indicate user is logged out
  };

  

  return (
    <div className='fixed-top Header  header2'>
      <nav className=' w-100'>
        <div className='container'>
          <div className='d-flex justify-content-between my-1'>
            <div>
              <a href='#'><Link to="/"><img src="/Logo4.png" alt="no logo" loading={"lazy"} style={{ width: '70px' }} /></Link></a>
            </div>
            <div className="rightside mt-2">
              <div className="links" id={HiddenLink ? "hidden" : ""}>
                <div>
                  <a className='nav-item '><Link to="/">Home</Link></a >
                  <a className='nav-item '><Link to="/TermandConditions">Term & Conditions</Link></a >
                  <a className='nav-item '><Link to="/PrivacyPolicy">Privacy Policy</Link></a >
                  {/* {loginSelector.isLogin ? "Log out" : "Login"} */}
                  <a className="bn632-hover bn19 p-2" >{isLogin ? <Link  onClick={handleLogout} to="/">Log Out</Link> : <span><Link to="/Login" >Login</Link>/ <Link to="/Register">Register</Link></span>}</a>   
                </div>
              </div>
              <button onClick={() => setHiddenLink(!HiddenLink)}>
                <TfiMenu style={{ color: "#ffffff", }} /> 
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header





