import "./topbar.css"
import { Link } from "react-router-dom"
import { Chat, Notifications, Person, Search } from "@mui/icons-material"
function TopBar() {
    return (
        <div className="topBarContainer">
            
                <Link to={"/app"} style={{textDecoration:"none",color:"white"}}>
                    <span className="logo">Hoops</span>
                </Link>
                <img className="topBarImage" src="\assets\person\2.jpeg" alt="" />
        </div>
    )
}
export default TopBar