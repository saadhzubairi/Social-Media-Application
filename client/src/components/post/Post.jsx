import "./post.css";
import { MoreVert } from "@mui/icons-material"
function Post(props) {
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="assets\person\2.jpeg" alt="" className="postProfileImage" />
                        <span className="postUsername">Villem Dayfo</span>
                        <span className="postTime">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCentre">
                    <span className="postText">Crazy adventures everywhere!</span>
                    <img src="assets\post\1.jpeg" alt="" className="postImage" />
                </div>
                <div className="postBottom"></div>
            </div>
        </div>
    )
}
export default Post