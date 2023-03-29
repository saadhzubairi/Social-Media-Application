import { ArrowDownward, Bookmark, Chat, Event, Feed, Group, Help, HelpOutline, PlayCircleFilled, School, VideoCall, VideoStable, WorkOutline } from "@mui/icons-material"
import "./sidebar.css"
function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem"> <Feed className="sidebarIcon"/> <span className="sidebarItemText">Feed</span> </li>
                    <li className="sidebarListItem"> <Chat className="sidebarIcon"/> <span className="sidebarItemText">Chat</span> </li>
                    <li className="sidebarListItem"> <PlayCircleFilled className="sidebarIcon"/> <span className="sidebarItemText">Videos</span> </li>
                    <li className="sidebarListItem"> <Group className="sidebarIcon"/> <span className="sidebarItemText">Groups</span> </li>
                    <li className="sidebarListItem"> <Bookmark className="sidebarIcon"/> <span className="sidebarItemText">Bookmarks</span> </li>
                    <li className="sidebarListItem"> <HelpOutline className="sidebarIcon"/> <span className="sidebarItemText">Help</span> </li>
                    <li className="sidebarListItem"> <WorkOutline className="sidebarIcon"/> <span className="sidebarItemText">Jobs</span> </li>
                    <li className="sidebarListItem"> <Event className="sidebarIcon"/> <span className="sidebarItemText">Events</span> </li>
                    <li className="sidebarListItem"> <School className="sidebarIcon"/> <span className="sidebarItemText">School</span> </li>
                </ul>
                <button className="sidebarButton"><ArrowDownward className="sidebarButtonIcon"/>Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend"> <img src="\assets\person\8.jpeg" alt="" className="sidebarFriendImage" /> <span className="sidebarFriendName">Jani Doe</span> </li>
                    <li className="sidebarFriend"> <img src="\assets\person\7.jpeg" alt="" className="sidebarFriendImage" /> <span className="sidebarFriendName">Wilhem</span> </li>
                    <li className="sidebarFriend"> <img src="\assets\person\6.jpeg" alt="" className="sidebarFriendImage" /> <span className="sidebarFriendName">Clark</span> </li>
                    <li className="sidebarFriend"> <img src="\assets\person\5.jpeg" alt="" className="sidebarFriendImage" /> <span className="sidebarFriendName">Fook</span> </li>
                    <li className="sidebarFriend"> <img src="\assets\person\4.jpeg" alt="" className="sidebarFriendImage" /> <span className="sidebarFriendName">Debby</span> </li>
                    <li className="sidebarFriend"> <img src="\assets\person\3.jpeg" alt="" className="sidebarFriendImage" /> <span className="sidebarFriendName">Russo</span> </li>
                    <li className="sidebarFriend"> <img src="\assets\person\1.jpeg" alt="" className="sidebarFriendImage" /> <span className="sidebarFriendName">Dave</span> </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar