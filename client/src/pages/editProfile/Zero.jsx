import { useContext, useState } from "react";
import "./editProfile.css"
import { AuthContext } from "../../context/AuthContext";
import axios from "axios"
import { CircularProgress } from "@mui/material";
function Zero(props) {
    const [loading, setLoading] = useState(false)
    const { user, dispatch } = useContext(AuthContext)

    const [formData, setFormData] = useState({
        fname: user.name.fname,
        lname: user.name.lname,
        email: user.email,
        username: user.username,
        gender: user.gender,
        city: 'Karachi, PK',
        DOB: user.DOB,
        MBTI: user.MBTI,
        bio: user.bio,
    })
    const genders = ["Male", "Female", "Other"];
    const handleChange = (event) => {
        event.preventDefault()
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const onSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        console.log(formData);
        await axios.put(`/butterfly/${user._id}`, formData)
            .then((res) => {
                console.log(res.data);
                dispatch({ type: "UPDATE_INFO", payload: res.data });

            })
            .catch(err => console.log(err))
        setLoading(false)
    }
    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="subWindow">
                    <div className="subWindowBox">
                        <div className="nameBox">
                            <input type="text" name='fname' className="registerTextField" required onChange={handleChange} value={formData.fname} placeholder='First Name' />
                            <input type="text" name='lname' className="registerTextField" required onChange={handleChange} value={formData.lname} placeholder='Last Name' />
                        </div>
                        <input type="text" autoComplete='off' name='username' className="registerTextField" required onChange={handleChange} value={formData.username} placeholder='Username' />
                        <input type="email" autoComplete='off' name='email' className="registerTextField" required onChange={handleChange} value={formData.email} placeholder='Email' />
                        <select type="text" name='gender' className="registerTextField" required onChange={handleChange} value={formData.gender} placeholder='Gender' >
                            <option value={user.gender} disabled hidden>
                                {user.gender}
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
                        <button className="registerButton" id="basicInfoSave" type='submit'>{loading ? <CircularProgress color="inherit" /> : "Save"}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Zero