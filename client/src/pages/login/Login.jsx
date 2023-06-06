import { useContext, useRef } from 'react';
import './login.css'
import { loginCall } from "../../apiCalls"
import { AuthContext } from '../../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';
function Login(props) {
    const email = useRef();
    const password = useRef();

    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({
            email: email.current.value,
            password: password.current.value
        }, dispatch)
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
                        <input type="email" className="loginTextField"
                            placeholder='Email' ref={email} required />
                        <input type="password" className="loginTextField"
                            minLength="6" placeholder='Password' ref={password} required />

                        <button className="loginButton">{isFetching ? <CircularProgress color='inherit' /> : "Log in"}</button>
                        <button className="registerButton" disabled={isFetching ? true : false}>Sign up</button>
                        <span className="forgotPassword" >Forgot Password?</span>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login