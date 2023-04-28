import { useEffect, useState } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material"
import process from "process"
import axios from "axios";
import { format } from "timeago.js"
import { Link } from "react-router-dom"

function Post({ post }) {
    const [like, setLike] = useState(post?.like)
    const [isLiked, setIsLiked] = useState(false)
    const LikeHandler = () => {
        setIsLiked(!isLiked)
        setLike(isLiked ? like - 1 : like + 1)
    }
    const [user, setUser] = useState({});

    useEffect(() => {
        const getLikes = () => {

        }
    })

    useEffect(() => {
        const fetchUser = () => {
            axios.get(`/users/${post.userId}`).then(res => setUser(res.data)).catch(error => console.log(error))
        }
        fetchUser();
    }, [post.userId])

    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`} style={{textDecoration:"none"}}>
                            <img
                                src={user.profilePic || PF + "person/0.jpg"}
                                alt=""
                                className="postProfileImage" />
                        </Link>
                            <span className="postUsername">{user.username}</span>
                        <span className="postTime">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCentre">
                    <span className="postText">{post?.desc}</span>
                    {post?.img === "img.png" ? null : <img src={`${post?.img}`} alt="" className="postImage" />}
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}like.png`} alt="" className="postBottomLeftIcon" onClick={LikeHandler} />
                        <img src={`${PF}heart.png`} alt="" className="postBottomLeftIcon" onClick={LikeHandler} />
                        <span className="postLikeCounter">{post.likes.length} {post.likes.length === 1 ? "person" : "people"} liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentcount">0 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post