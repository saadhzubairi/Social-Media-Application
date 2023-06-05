import "./topbar.css"
import { Link } from "react-router-dom"
import { Chat, Notifications, Person, Search } from "@mui/icons-material"
function TopBar() {
    return (
        <div className="topBarContainer">
            <div className="topBarLeft">
                <Link to={"/"} style={{textDecoration:"none",color:"white"}}>
                    <span className="logo">Hoops</span>
                </Link>
            </div>
            <div className="topBarRight">
                <img className="topBarImage" src="\assets\person\2.jpeg" alt="" />
            </div>
        </div>
    )
}
export default TopBar