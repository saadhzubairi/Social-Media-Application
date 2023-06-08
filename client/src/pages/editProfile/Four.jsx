import { useState } from "react";
import "./editProfile.css"
function Four(props) {
    const [formData, setFormData] = useState({
        oldpassword: '',
        newpassword: ''
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
    }
    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="subWindow">
                    <div className="subWindowBox">
                        <input type="password" autoComplete='off' name='email' className="registerTextField" required onChange={handleChange} value={formData.oldpassword} placeholder='Enter Old Password' />
                        <input type="password" autoComplete='off' name='email' className="registerTextField" required onChange={handleChange} value={formData.newpassword} placeholder='Enter New Password' />
                        <button className="registerButton" id="basicInfoSave" type='submit'>Change Password</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Four