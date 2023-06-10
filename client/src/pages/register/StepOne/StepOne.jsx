import { CircularProgress } from '@mui/material';
import { Link, NavLink } from "react-router-dom"
import React, { useState } from 'react'
import axios from "axios"
function StepOne({ setStepTrack }) {
    const [eexists, setEexists] = useState(false)
    const [uexists, setUexists] = useState(false)
    const [pNotSame, setpNotSame] = useState(false)
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
        if (event.target.name === "username" && event.target.value.length !== 0) {
            await axios.get(`/butterfly/checkUsername/${event.target.value}`).then(res => setUexists(res.data.exists)).catch(err => console.log(err))
        }
        if (event.target.name === "email" && event.target.value.length !== 0) {
            await axios.get(`/butterfly/checkEmail/${event.target.value}`).then(res => setEexists(res.data.exists)).catch(err => console.log(err))
        }
        if (event.target.name === "passwordV" && event.target.value.length !== 0) {
            if (event.target.value !== formData.password) {
                setpNotSame(true)
            }
            else {
                setpNotSame(false)
            }
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

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="registerBox">
                    <div className={uexists || eexists || pNotSame ? "initText-angry" : "initText"}>
                        {
                            uexists && eexists ?
                                " FAccounts with provided email and username already exist" :
                                uexists ? "Username already exists, select a different username" :
                                    eexists ? "An account is already associated with this email, use a different one" :
                                        pNotSame ? "Passwords don't match" :
                                            "Create your new account!"
                        }
                    </div>
                    <div className="nameBox">
                        <input type="text" name='fname' className="registerTextField" required onChange={handleChange} value={formData.fname} placeholder='First Name' />
                        <input type="text" name='lname' className="registerTextField" required onChange={handleChange} value={formData.lname} placeholder='Last Name' />
                    </div>
                    <input type="text" autoComplete='off' id={formData.username.length === 0 ? "normal" : uexists ? "redTF" : "greenTF"} name='username' className="registerTextField" required onChange={handleChange} value={formData.username} placeholder='Username' />
                    <input type="email" autoComplete='off' id={formData.email.length === 0 ? "normal" : eexists ? "redTF" : "greenTF"} name='email' className="registerTextField" required onChange={handleChange} value={formData.email} placeholder='Email' />
                    <input type="password" autoComplete='off' name='password' className="registerTextField" required onChange={handleChange} value={formData.password} placeholder='Password Again' />
                    <input type="password" autoComplete='off' name='passwordV' className="registerTextField" required placeholder='Password' onChange={handleChange} />
                    <div className="buttonClass">
                        <button className="registerButton" type='submit' disabled={uexists || eexists || pNotSame ? true : false}>{loading ? <CircularProgress color='inherit' /> : "Next"}</button>
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