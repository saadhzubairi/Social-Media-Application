import TopBar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./profile.css"

function ProfilePage(props) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <>
            <TopBar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={`${PF}post/3.jpeg`} alt="" className="coverPicture" />
                            <img src={`${PF}person/2.jpeg`} alt="" className="profilePicture" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Willhem Dawes</h4>
                            <h4 className="profileInfoDesc">Hey, ya'll! hope all's good!</h4>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={"GhaznafarShah"}/>
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfilePage