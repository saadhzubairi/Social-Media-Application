import { useContext, useState } from "react";
import { CircularProgress } from "@mui/material";
import "./editProfile.css"
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { DoneAllRounded, Warning, WarningOutlined } from "@mui/icons-material"
function Four(props) {
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [changed, setChanged] = useState(false)
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
        setLoading(true)
        setError(false)
        setChanged(false)
        e.preventDefault()
        console.log(formData);
        axios.put(`/butterfly/${user._id}/update-password`, {
            currentPassword: formData.oldpassword,
            newPassword: formData.newpassword,
        }).then(() => {
            setFormData({
                oldpassword: '',
                newpassword: ''

            });
            setChanged(true)
        }).catch((err) => {
            console.log(err)
            setError(true)
        })
        setLoading(false)
    }

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="subWindow">
                    <div className="subWindowBox">
                        <input type="password" autoComplete='off' name='oldpassword' className="registerTextField" required onChange={handleChange} value={formData.oldpassword} placeholder='Enter Old Password' />
                        <input type="password" autoComplete='off' name='newpassword' className="registerTextField" required onChange={handleChange} value={formData.newpassword} placeholder='Enter New Password' />
                        <button className="registerButton" id="basicInfoSave" type='submit'>{loading ? <CircularProgress color="inherit" /> : "Change Password"}</button>
                        {error ? <div className="errorText"> <Warning /> Incorrect password, try again.</div> : null}
                        {changed ? <div className="changedText"> <DoneAllRounded /> Password changed successfully.</div> : null}
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Four