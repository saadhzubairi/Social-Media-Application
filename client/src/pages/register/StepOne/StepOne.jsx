import React, { useState } from 'react'
function StepOne({ setStepTrack }) {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        username: '',
        password: '',
    })

    const handleChange = (event) => {
        event.preventDefault()
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        setStepTrack(2)
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
                    <button className="registerButton" type='submit'>Sign Up</button>
                    <span className="forgotPassword" >Already have an account?</span>
                </div>
            </form>
        </div>
    )
}
export default StepOne