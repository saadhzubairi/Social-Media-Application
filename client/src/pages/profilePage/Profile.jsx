import TopBar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./profile.css"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router"

function ProfilePage(props) {
    const [user, setUser] = useState({});
    const params = useParams();

    useEffect(() => {
        const fetchUser = () => {
            axios.get(`/users?username=${params.username}`)
                .then(res => setUser(res.data))
                .catch(error => console.log(error))
        }
        fetchUser();
    }, [])
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <>
            <TopBar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={user.coverPic || `${PF}person/noCover.jpg`} alt="" className="coverPicture" />
                            <img src={`${PF}person/0.jpg`} alt="" className="profilePicture" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <h4 className="profileInfoDesc">Hey, ya'll! hope all's good!</h4>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={user.username} />
                        <Rightbar profile user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfilePage