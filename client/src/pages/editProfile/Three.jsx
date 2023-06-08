import { useContext, useState } from "react";
import "./editProfile.css"
import { CircularProgress } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
function Three(props) {
    const { user } = useContext(AuthContext)
    const [imgUrl, setImgUrl] = useState(`https://api.dicebear.com/6.x/avataaars/svg?seed=${user.pfp.slice(user.pfp.indexOf("seed=") + 5), user.pfp.indexOf("&", user.pfp.indexOf("seed=") + 5)}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`)
    const handleChange = (event) => {
        event.preventDefault()
        setImgUrl(
            `https://api.dicebear.com/6.x/avataaars/svg?seed=${event.target.value}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`
        )
        console.log(imgUrl);
    }
    return (
        <div>
            <form>
                <div className="subWindow">
                    <div className="subWindowBox">
                        <div className="interestsHeading">Make a fun and unique Avatar</div>
                        <div className="interestsSubHeading">Why not spice things up a bit!</div>
                        <img src={imgUrl} alt="" className="ChooseAvatar" />
                        <input id="stepFiveTF" type="text" name='username'
                            className="registerTextField" required onChange={handleChange} placeholder='Enter Prompt' />
                        <button className="registerButton" >Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Three