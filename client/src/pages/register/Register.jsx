import './register.css'
function Register(props) {
    return (
        <div className='register'>
            <div className="registerWrapper">
                <div className="registerLeft">
                    <div className="registerLogo">Hoops Social</div>
                    <span className="registerDesc">Connect with people all around you!</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input type="text" className="registerTextField" placeholder='Email' />
                        <input type="text" className="registerTextField" placeholder='Username' />
                        <input type="text" className="registerTextField" placeholder='Password' />
                        <input type="text" className="registerTextField" placeholder='Password Again' />
                        <button className="registerButton">Log in</button>
                        <span className="forgotPassword">Forgot Password?</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register