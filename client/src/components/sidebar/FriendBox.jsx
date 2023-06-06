import './friendBox.css'
import { Link } from "react-router-dom"
function FriendBox({ friend }) {
    return (
        <Link to={"friend/123"} style={{ textDecoration: "none", color:"#444"}}>
            <div className="friendBoxContainer">
                <div className="avatarAndText">
                    <img src="https://slowly.app/wp-content/uploads/2020/04/Ahmetfurkan-1.jpg" alt="" className="avatar" />
                    <div className="text">
                        <div className="textName">Saad Zubairi</div>
                        <div className="textSubText">Living the wild life!</div>
                    </div>
                </div>
                <div className="lastTextAndStatus">
                    <div className="lastText">5 days ago</div>
                    <div className="status"></div>
                </div>
            </div>
        </Link>
    )
}
export default FriendBox