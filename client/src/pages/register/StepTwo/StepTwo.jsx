import { CircularProgress } from '@mui/material';
import React, { useState } from 'react'
function StepTwo({ setStepTrack }) {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        gender: '',
        city: 'Karachi, PK',
        DOB: '',
        MBTI: '',
        bio: '',
    })
    const genders = ["Male", "Female", "Other"];
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        await delay(500);
        localStorage.setItem("gender", formData.gender)
        localStorage.setItem("city", formData.city)
        localStorage.setItem("DOB", formData.DOB)
        localStorage.setItem("MBTI", formData.MBTI)
        localStorage.setItem("bio", formData.bio)
        setStepTrack(3)
    }
    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="registerBox">
                    <select type="text" name='gender' className="registerTextField" required onChange={handleChange} value={formData.gender} placeholder='Gender' >
                        <option value="" disabled hidden>
                            Gender
                        </option>
                        {genders.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <input type="text" name='city' className="registerTextField" required onChange={handleChange} value={formData.city} placeholder='City' disabled />
                    <input type="date" autoComplete='off' name='DOB' className="registerTextField" required onChange={handleChange} value={formData.DOB} placeholder='Birthday' />
                    <input type="text" autoComplete='off' name='MBTI' className="registerTextField" required onChange={handleChange} value={formData.MBTI} placeholder='MBTI Personality' />
                    <textarea type="text" autoComplete='off' name='bio' className="registerTextField" required onChange={handleChange} value={formData.bio} placeholder='Bio' />
                    <button className="registerButton" type='submit'>{loading ? <CircularProgress color='inherit' /> : "Next"}</button>
                </div>
            </form>
        </div>
    )
}
export default StepTwo