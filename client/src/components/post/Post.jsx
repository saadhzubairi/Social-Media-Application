import { useState } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material"

function Post({ post }) {
    const [like, setLike] = useState(post?.like)
    const [isLiked, setIsLiked] = useState(false)
    const LikeHandler = () =>{
        setIsLiked(!isLiked)
        setLike(isLiked? like-1 : like+1)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="assets\person\2.jpeg" alt="" className="postProfileImage" />
                        <span className="postUsername">Villem Dayfo</span>
                        <span className="postTime">{post?.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCentre">
                    <span className="postText">{post?.desc}</span>
                    <img src={post?.photo} alt="" className="postImage" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets\like.png" alt="" className="postBottomLeftIcon" onClick={LikeHandler}/>
                        <img src="assets\heart.png" alt="" className="postBottomLeftIcon" onClick={LikeHandler}/>
                        <span className="postLikeCounter">{like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentcount">{post?.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post