import { useRef } from 'react';
import './login.css'
function Login(props) {

    const handleClick = (e) => {
        e.preventDefault();
        console.log(email.current.value);
        console.log(password.current.value);
    }

    const email = useRef();
    const password = useRef();

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
                        <button className="loginButton">Log in</button>
                        <button className="registerButton">Sign up</button>
                        <span className="forgotPassword">Forgot Password?</span>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login