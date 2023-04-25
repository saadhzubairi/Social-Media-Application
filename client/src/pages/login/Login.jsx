import './login.css'
function Login(props) {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <div className="loginLogo">Hoops Social</div>
                    <span className="loginDesc">Connect with people all around you!</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" className="loginTextField" placeholder='Email' />
                        <input type="text" className="loginTextField" placeholder='Password' />
                        <button className="loginButton">Log in</button>
                        <button className="registerButton">Sign up</button>
                        <span className="forgotPassword">Forgot Password?</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login