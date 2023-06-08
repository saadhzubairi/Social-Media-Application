import { PeopleOutline } from "@mui/icons-material"
import FriendBox from "./FriendBox"
import "./sidebar.css"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"
function Sidebar(props) {
    const { user } = useContext(AuthContext)
    return (
        <div className="sidebar">
            <div className="friendsContainer">
                <div className="friendsContainerHeader">
                    <div className="friendsListHeading"><PeopleOutline /> Friends</div>
                    <div className="friendsListSubHeading">You have 12 friends</div>

                </div>
                <div className="friendsListViewPort">
                    {
                        user ?
                            <div className="friendsList">
                                {user.pals.length === 0 ?
                                    <div className="noFriends">
                                        "No friends yet? Try the suggested profiles and match up!"
                                    </div> :
                                    user.pals.map((pal) => <FriendBox key={pal} pal={pal} />)}
                            </div> : <div className="noFriends">
                                "Session Closed"
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default Sidebar