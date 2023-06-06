import { PeopleOutline } from "@mui/icons-material"
import FriendBox from "./FriendBox"
import "./sidebar.css"
function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="friendsContainer">
                <div className="friendsContainerHeader">
                    <div className="friendsListHeading"><PeopleOutline /> Friends</div>
                    <div className="friendsListSubHeading">You have 12 friends</div>

                </div>
                <div className="friendsListViewPort">
                    <div className="friendsList">
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                        <FriendBox friend={"saad"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar