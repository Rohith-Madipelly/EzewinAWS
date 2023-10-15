
import React,{useState, useEffect} from 'react';
import './nav.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {

  const BASE_URL = "http://127.0.0.1:8001/api/"
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setsuccessMessage] = useState();
  const apiUrl1 = `${BASE_URL}/profile`;

  const navigate = useNavigate();

  const handleLogin = () => {
   
      const token = localStorage.getItem('token');
      const caling=`http://127.0.0.1:8001/api/profile${token}`
   
    axios.post(caling)
      .then((responsed) => {
        // Handle the response on successful login
        // alert(responsed.data.message)
        // alert(responsed.data.Token)
        // alert(responsed.data.Name)
        alert(responsed)
    
      // Set the token in localStorage
      // localStorage.setItem('token', responsed.data.Token);
      setsuccessMessage(responsed.data.message)
    
      setTimeout(() => {
        navigate('/');
      }, 1000);


        
      })
      .catch(error => {
        // Handle errors
        setErrorMessage(error.message)
        console.error('Error during login:', error.message);
      });
  };


















  return (
    <section className='container py-2 marginTopper-80'>
      <div className='row'>
        {/* col first-left */}
        <div className='col-sm-12 col-md-3'>
          <div className='card'>
            <div className='profileCard text-center'>
              <img
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
                alt='profilePic'
                className='rounded-circle img-fluid'
                style={{ maxWidth: '150px' }}
              />
              <div className='data'>
                <p className='my-1'>UserName</p>
                <p className='mb-4'>UserEmail</p>
                </div>
          </div>
        </div>

       </div>
       <div className="col col-md-9 card col-sm-12">
          <div className='m-4'>
          <div className="row ms-1">
              <div className="col-3">
                  <strong>Full Name</strong>
              </div>
              <div className="col-9">
                 {/* Rohith Madipelly */}
              </div>
            </div>
            <hr/>
            <div className="row ms-1">
              <div className="col-3">
                   <strong>Email</strong>
              </div>
              <div className="col-9">
                  {/* madipellyrohith@gmail.com */}
              </div>
            </div>
            <hr/>
            <div className="row ms-1">
              <div className="col-3">
                   <strong>Gender</strong>
              </div>
              <div className="col-9">
                  {/* Male */}
              </div>
            </div>
            <hr/>
            <div className="row ms-1">
              <div className="col-3">
                  <strong>Phone</strong>
              </div>
              <div className="col-9">
                  {/* 9951072005 */}
              </div>
            </div>
            <hr/>
            
            <div className="row ms-1">
              <div className="col-3">
                  <strong>Address</strong>
              </div>
              <div className="col-9">
                  {/* 11-24-140,2nd Bank Colony, Shanthi Nagar,Warangal,Telangana,India. */}
              </div>
            </div>
            <hr/>
            <div className="row ms-1">
              <div className="col-3">
              <strong>OrderId</strong>
              </div>
              <div className="col-9">
                  Payment Pending <Link to='/PaymentScreen'>Pay 49 rs</Link>
                  
              </div>
            </div>
            
          </div>
       </div>
       </div>

    </section>
    
  )
}

export default ProfilePage
