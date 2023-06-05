import { useState } from 'react';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import './register.css'
import StepThree from './StepThree/StepThree';
import StepFour from './StepFour/StepFour';
function Register(props) {

    const [stepTrack, setStepTrack] = useState(1)

    return (
        <div className='register'>
            <div className="registerWrapper">
                <div className={stepTrack === 4 ? "registerLeft-hide" : "registerLeft"}>
                    <div className="registerLogo">Hoops Social</div>
                    <span className="registerDesc">Connect with people all around you!</span>
                </div>
                <div className="registerRight">
                    {stepTrack === 1 ?
                        <StepOne setStepTrack={setStepTrack} /> :
                        stepTrack === 2 ?
                            <StepTwo setStepTrack={setStepTrack} /> :
                            stepTrack === 3 ?
                                <StepThree setStepTrack={setStepTrack} /> :
                                <StepFour setStepTrack={setStepTrack} />
                    }
                </div>
            </div>
        </div>
    )
}
export default Register