import React, { useState } from 'react'
import './Login.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { colors } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {BASE_URL} from '../../Enviornment'
import { useNavigate } from "react-router-dom";
import {  useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setToken } from '../../redux/actions/loginAction';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setsuccessMessage] = useState();
  const location = useLocation();
  const apiUrl1 = `${BASE_URL}/login`;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const loginData = {
      Email: email,
      Password: password

    };
    

    axios.post(apiUrl1, loginData)
      .then((responsed) => {
        // Handle the response on successful login
        // alert(responsed.data.message)
        // alert(responsed.data.Token)
        // alert(responsed.data.Name)
        
    
      // Set the token in localStorage
      localStorage.setItem('token', responsed.data.Token);
      setsuccessMessage(responsed.data.message);
      dispatch(setToken(responsed.data.Token));
    
      setTimeout(() => {
        navigate('/Profile');
      }, 1000);


        
      })
      .catch(error => {
        // Handle errors
        setErrorMessage(error.message)
        console.error('Error during login:', error.message);
      });
     
  };


 

  return (
    <div className='Login marginTopper-80'>
      <section className="vh-50 gradient-custom mt-5 hover12">
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-coustm text-dark" style={{ borderRadius: "1rem" }}>
                <div className="card-body pt-5 text-center">
                  <div className="t-4 pb-4">
                    <h2 className="fw-bold mb-2 text-uppercase text-dark">Login</h2>
                    <p className="text-dark-50 mb-3">Please enter your login and password!</p>
                    <div className="form-outline form-white mb-4">
                      <div className="mb-2">
                        <Box
                          component="form"
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "90%" },
                          }}
                          noValidate
                          autoComplete="off"
                        >

                          <div>
                            <TextField id="outlined-email-input" className='my-2 formobject text-white' label="User Email" placeholder="User Email" value={email} onChange={(e) => setEmail(e.target.value)} required />  <br />

                            <TextField id="outlined-password-input" className='my-2 formobject' type="password" label="UserPassword" placeholder="UserPassword" value={password} onChange={(e) => setPassword(e.target.value)} required />

                          </div>

                        </Box>
                      </div>



                    </div>



                    <p className="small mb-3 pb-lg-2"><a className="text-dark" href="#!">Forgot password?</a></p>

                    <button className="btn btn-outline-dark btn-lg px-5"  onClick={handleLogin} type="submit">Login</button>
                    {successMessage &&
                                            <div className='text-center bg-success'>
                                                {successMessage}
                                            </div>}
                                        {errorMessage &&
                                            <div className='text-center bg-danger'>
                                                {errorMessage}
                                            </div>}
              



                  </div>

                  <div>
                    <p className="mb-0 ">Don't have an account? <Link to="/Register" className='text-dark'>Register</Link>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login