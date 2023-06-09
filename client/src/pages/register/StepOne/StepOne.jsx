import { CircularProgress } from '@mui/material';
import { Link, NavLink } from "react-router-dom"
import React, { useState } from 'react'
import axios from "axios"
function StepOne({ setStepTrack }) {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        username: '',
        password: '',
    })

    const handleChange = async (event) => {
        event.preventDefault()
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        if (event.target.name === "username" && event.target.name.length !== 0) {
            await axios.get(`/butterfly/checkUsername/${event.target.value}`).then(res => console.log(res.data)).catch(err => console.log(err))
        }
        if (event.target.name === "email" && event.target.name.length !== 0) {
            await axios.get(`/butterfly/checkEmail/${event.target.value}`).then(res => console.log(res.data)).catch(err => console.log(err))
        }
        
    };

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        await delay(500);
        console.log(formData);
        localStorage.setItem("fname", formData.fname)
        localStorage.setItem("lname", formData.lname)
        localStorage.setItem("email", formData.email)
        localStorage.setItem("username", formData.username)
        localStorage.setItem("password", formData.password)
        setStepTrack(2)
    }

    const prevPls = () => {
        setStepTrack(1)
    }

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="registerBox">
                    <div className="nameBox">
                        <input type="text" name='fname' className="registerTextField" required onChange={handleChange} value={formData.fname} placeholder='First Name' />
                        <input type="text" name='lname' className="registerTextField" required onChange={handleChange} value={formData.lname} placeholder='Last Name' />
                    </div>
                    <input type="text" autoComplete='off' name='username' className="registerTextField" required onChange={handleChange} value={formData.username} placeholder='Username' />
                    <input type="email" autoComplete='off' name='email' className="registerTextField" required onChange={handleChange} value={formData.email} placeholder='Email' />
                    <input type="password" autoComplete='off' name='passwordV' className="registerTextField" required placeholder='Password' />
                    <input type="password" autoComplete='off' name='password' className="registerTextField" required onChange={handleChange} value={formData.password} placeholder='Password Again' />
                    <div className="buttonClass">
                        <button className="registerButton" type='submit'>{loading ? <CircularProgress color='inherit' /> : "Next"}</button>
                    </div>
                    <NavLink to={"/"}>
                        <span className="forgotPassword" >Already have an account?</span>
                    </NavLink>
                </div>
            </form>
        </div>
    )
}
export default StepOne