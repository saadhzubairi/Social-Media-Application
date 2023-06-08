import "./topbar.css"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { LogoutOutlined } from "@mui/icons-material"
function TopBar() {
    const { user } = useContext(AuthContext)
    const nav = useNavigate();
    const logout = () => {
        localStorage.clear()
        window.location.reload();
        nav("/.")
    }
    return (
        <div className="topBarContainer">
            <Link to={"/app"} style={{ textDecoration: "none", color: "white" }}>
                <span className="logo">Hoops</span>
            </Link>
            <div className="imageAndLogout">
                <Link to={"/App/profile"}>
                    <img className="topBarImage"
                        src={user ? user.pfp : "https://api.dicebear.com/6.x/avataaars/svg?seed=Chloe&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf"} alt="" />
                </Link>
                <div className="logout" onClick={logout}><LogoutOutlined /></div>
            </div>
        </div>
    )
}
export default TopBar