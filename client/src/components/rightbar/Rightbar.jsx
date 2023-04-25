import "./rightbar.css"

function Rightbar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayIcon" />
                    <span className="birthdayText"><b>Doc Holiday</b> and 4 other friends have their birthdays today</span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd" />
                <div className="rightbarTitle">Online Friends</div>
                <ul className="rightbarFriendsList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImage" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Jimmy Carter</span>
                    </li>
                </ul>
            </>
        )
    }


    const ProfileRightbar = () => {
        return (
            <>
                <div className="wrapperDiv">
                    <h4 className="rightbarTitile">User Information</h4>
                    <div className="rightbarInfo">
                        <div className="rightbarInfoItem">
                            < span className="rightbarInfoKey">City:</span>
                            < span className="rightbarInfoValue">New York</span>
                        </div>
                        <div className="rightbarInfoItem">
                            < span className="rightbarInfoKey">From:</span>
                            < span className="rightbarInfoValue">San Jose</span>
                        </div>
                        <div className="rightbarInfoItem">
                            < span className="rightbarInfoKey">Relationship:</span>
                            < span className="rightbarInfoValue">Single</span>
                        </div>
                    </div>
                    <h4 className="rightbarTitile">Following</h4>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Johnathan Pine</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Johnathan Pine</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Johnathan Pine</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Johnathan Pine</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Johnathan Pine</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Johnathan Pine</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
export default Rightbar