import { useContext, useRef, useState } from 'react';
import './login.css'
import { loginCall } from "../../apiCalls"
import { AuthContext } from '../../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useNavigate } from 'react-router-dom';
function Login(props) {
    const email = useRef();
    const password = useRef();
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const [loading, setLoading] = useState(false)

    const nav = useNavigate();

    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({
            email: email.current.value,
            password: password.current.value
        }, dispatch)
    }
    const toRegister = async (e) => {
        e.preventDefault()
        setLoading(true)
        await delay(500);
        nav("/register")
    }
    console.log(user);

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <div className="loginLogo">Hoops Social</div>
                    <span className="loginDesc">Connect with people all around you!</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <div className="loginInnerBox">
                            <input type="email" className="loginTextField"
                                placeholder='Email' ref={email} required />
                            <input type="password" className="loginTextField"
                                minLength="6" placeholder='Password' ref={password} required />

                            <button className="loginButton" type='submit'>{isFetching ? <CircularProgress color='inherit' /> : "Log in"}</button>

                            <button className="registerButton" type='none' onClick={(e) => toRegister(e)} disabled={isFetching ? true : false}>{loading ? <CircularProgress /> : "Sign up"}</button>

                            <span className="forgotPassword" >Forgot Password?</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login