import { useState } from "react"
import "./editProfile.css"
import Zero from "./Zero"
import One from "./One"
import Two from "./Two"
import Three from "./Three"
import Four from "./Four"
import { CalendarMonthOutlined, ListAltOutlined, Person2Outlined, PhotoFilterOutlined, ShieldMoonOutlined } from "@mui/icons-material"
function EditProfile(props) {
    const [item, setItem] = useState(0)
    return (
        <div className="editProf">
            <div className="EPHeader">
                Your profile
            </div>
            <div className="bottomPart">
                <div className="sideNavigator">
                    <ul className="EPList">
                        <li className="EPLitem" onClick={() => setItem(0)}><Person2Outlined />Basic Info</li>
                        <li className="EPLitem" onClick={() => setItem(1)}><ListAltOutlined />Interests</li>
                        <li className="EPLitem" onClick={() => setItem(2)}><CalendarMonthOutlined /> Schedule</li>
                        <li className="EPLitem" onClick={() => setItem(3)}><PhotoFilterOutlined /> Avatar</li>
                        <li className="EPLitem" onClick={() => setItem(4)}><ShieldMoonOutlined /> Change Password</li>
                    </ul>
                </div>
                <div className="mainWindow">
                    {
                        item === 0 ?
                            <Zero /> :
                            item === 1 ?
                                <One /> :
                                item === 2 ?
                                    <Two /> :
                                    item === 3 ?
                                        <Three /> :
                                        <Four />
                    }
                </div>
            </div>
        </div>
    )
}
export default EditProfile