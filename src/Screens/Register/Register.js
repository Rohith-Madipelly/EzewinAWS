import React, { useState } from 'react'
import './Register.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { colors } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {BASE_URL} from '../../Enviornment'




import { useNavigate } from "react-router-dom";
function Register() {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")

    const [errorMessage, setErrorMessage] = useState();
    const [successMessage, setsuccessMessage] = useState();
    const [gender,setGender] =useState();
    const navigate = useNavigate();

    const RegisterURL12 = "http://127.0.0.1:8001/api/register";

    const handleRegister = () => {
        const RegisterData = {
            Name: userName,
            Email: email,
            Phone_Number: PhoneNumber,
            Gender: gender,
            Password: password
            // ConfirmPassword: confirmpassword,
           };

        axios.post(RegisterURL12, RegisterData)
            .then((response) => {
                // Handle the response on successful Register

                setsuccessMessage("Registration Successful")
                
       
        setTimeout(() => {
            navigate('/Login');
          }, 3000);
  
  
            })
            .catch((error) => {
        
                setErrorMessage('Error during Register:', error.message)

         

                setTimeout(() => {
                    setErrorMessage("")
                    navigate('/Register');
                  }, 2000);
            });
    };


    return (
        <div>
            <section className="vh-50 gradient-custom mt-5">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center align-items-cente">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-coustm text-dark    hover12" style={{ borderRadius: "1rem" }}>
                                <div className="card-body pt-5 text-center ">

                                    <div className="t-4 pb-4 r">

                                        <h2 className="fw-bold mb-2 text-uppercase text-dark">Register</h2>
                                        <p className="mb-3 text-dark-50">Please Register your self</p>

                                        <div className="form-outline form-white mb-4">

                                            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
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
                                                        <TextField id="outlined-Name-input" className='my-2 formobject text-white' label="User Full Name" placeholder="User Full Name" value={userName} onChange={(e) => setUserName(e.target.value)} required />  <br />
                                                        <TextField id="outlined-email-input" className='my-2 formobject text-white' label="User Email" placeholder="User Email" value={email} onChange={(e) => setEmail(e.target.value)} required />  <br />
                                                        <TextField id="outlined-phone-input" className='my-2 formobject text-white' label="Phone Number" placeholder="Phone Number" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />  <br />

                                                        <TextField id="outlined-password-input" className='my-2 formobject' type="password" label="User Password" placeholder="User Password" value={password} onChange={(e) => setpassword(e.target.value)} required />
                                                        <TextField id="outlined-password-input" className='my-2 formobject' type="password" label="confirm Password" placeholder="confirm Password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} required />
                                                        <TextField
                                                            id="outlined-select-currency"
                                                            select
                                                            label="Gender"
                                                            defaultValue="Male"
                                                            helperText="Please select your Gender"
                                                           className='w-75'
                                                            value={gender}
                                                           onChange={(e) => setGender(e.target.value)}
                                                           required
                                                        >
                                                            <MenuItem value="Male">
                                                                Male
                                                            </MenuItem>
                                                            <MenuItem value="Female">
                                                                Female
                                                            </MenuItem>
                                                            <MenuItem value="other">
                                                                Other
                                                            </MenuItem>

                                                        </TextField>
                                                    </div>

                                                </Box>
                                            </div>



                                        </div>





                                        <button className="btn btn-primary btn-lg px-5 text-dark" type="submit" onClick={handleRegister}>Register</button>

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
                                        <p className="mb-0">Have an account? <Link to="/Login" className='text-dark'>Login</Link>
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

export default Register