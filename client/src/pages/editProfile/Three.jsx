import { useContext, useState } from "react";
import "./editProfile.css"
import { CircularProgress } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
function Three(props) {
    const { user, dispatch } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const startIndex = user.pfp.indexOf("seed=") + 5; // Add 5 to exclude "seed="
    const endIndex = user.pfp.indexOf("&", startIndex);
    const extractedString = user.pfp.slice(startIndex, endIndex);
    const [imgUrl, setImgUrl] = useState(`https://api.dicebear.com/6.x/avataaars/svg?seed=${extractedString}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`)
    const handleChange = async (event) => {
        event.preventDefault()
        setImgUrl(
            `https://api.dicebear.com/6.x/avataaars/svg?seed=${event.target.value}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`
        )
    }
    const handleSave = async (e) => {
        e.preventDefault()
        console.log(imgUrl);
        setLoading(true)
        await axios.put(`/butterfly/${user._id}`, { pfp: imgUrl })
            .then((res) => {
                console.log(res.data);
                dispatch({ type: "UPDATE_INFO", payload: res.data });
            })
            .catch(err => console.log(err))
        setLoading(false)
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
                            className="registerTextField" required onChange={handleChange} placeholder='Enter Prompt'
                            defaultValue={extractedString} />
                        <button className="registerButton" onClick={(e)=>handleSave(e)}>{loading ? <CircularProgress /> : "Save"}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Three