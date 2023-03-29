import "./topbar.css"
import { Chat, Notifications, Person, Search } from "@mui/icons-material"
function TopBar() {
    return (
        <div className="topBarContainer">
            <div className="topBarLeft">
                <span className="logo">Hoops</span>
            </div>
            <div className="topBarCentre">
                <div className="searchbar">
                    <Search className="SearchIcon"/>
                    <input placeholder="Search stuff" type="text" className="searchInput" />
                </div>
            </div>
            <div className="topBarRight">
                <div className="topBarLinks">
                    <span className="topBarLink">Homepage</span>
                    <span className="topBarLink">Timeline</span>
                </div>
                <div className="topBarIcons">
                    <div className="topBarIconItem"><Person/><span className="topBarIconBadge">1</span></div>
                    <div className="topBarIconItem"><Chat/><span className="topBarIconBadge">1</span></div>
                    <div className="topBarIconItem"><Notifications/><span className="topBarIconBadge">1</span></div>
                </div>
                <img className="topBarImage" src="\assets\person\2.jpeg" alt="" />
            </div>
        </div>
    )
}
export default TopBar