import { useContext, useState } from 'react';
import './stepFive.css'
import axios from 'axios'
import { loginCall } from '../../../apiCalls';
import { AuthContext } from '../../../context/AuthContext';
import { CircularProgress } from '@mui/material';
function StepFive({ setStepTrack, interests, schedule }) {
    const [imgUrl, setImgUrl] = useState('https://api.dicebear.com/6.x/avataaars/svg?seed=Chloe&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf')
    const { user, isFetching, error, dispatch } = useContext(AuthContext)
    const onSubmit = async (e) => {
        await axios.post('/butterfly/',
            {
                username: localStorage.getItem("username"),
                email: localStorage.getItem("email"),
                password: localStorage.getItem("password"),
                name: {
                    fname: localStorage.getItem("fname"),
                    lname: localStorage.getItem("lname"),
                },
                gender: localStorage.getItem("gender"),
                DOB: localStorage.getItem("DOB"),
                MBTI: localStorage.getItem("MBTI"),
                bio: localStorage.getItem("bio"),
                city: localStorage.getItem("city"),
                interests: interests,
                schedule: schedule,
                hasInputtedSchedule: true,
                isBlocked: false,
                pals: [],
                pfp: imgUrl
            }
        ).then(res => {
            console.log(res);
            loginCall({
                email: res.data.email,
                password: localStorage.getItem("password")
            }, dispatch)
            localStorage.clear();
        }).catch(err => console.log(err))
    }

    const handleChange = (event) => {
        event.preventDefault()
        setImgUrl(
            `https://api.dicebear.com/6.x/avataaars/svg?seed=${event.target.value}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`
        )
        console.log(imgUrl);
    }

    const prevPls = () => {
        setStepTrack(1)
    }

    return (
        <div>
            <div className="registerBox-four">
                <div className="interestsHeading">Make a fun and unique Avatar</div>
                <div className="interestsSubHeading">We don't believe in profile pictures so we give you the option to
                    choose an avatar from an array of random prebuilt beautiful avatars!</div>
                <img src={imgUrl} alt="" className="ChooseAvatar" />
                <input id="stepFiveTF" type="text" name='username'
                    className="registerTextField" required onChange={handleChange} placeholder='Enter Prompt' />

                <div className="buttonClass">
                    <button className="registerButton" id='backButton' onClick={prevPls}>{"Previous"}</button>
                    <button className="registerButton" onClick={onSubmit}>{isFetching ? <CircularProgress color='inherit' /> : "Create Account"}</button>
                </div>
            </div>
        </div>
    )
}
export default StepFive