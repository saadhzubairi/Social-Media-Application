import { format } from "timeago.js";
import "./post.css";
import { useContext, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { DeleteOutline } from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";

function Post({ post }) {
    const [poster, setPoster] = useState({ _id: "n/a" })
    const { user } = useContext(AuthContext)
    useEffect(() => {
        const fetchPoster = async () => {
            await axios.get(`/butterfly?id=${post.userId}`).then(res => setPoster(res.data)).catch(err => console.log(err))
        }
        fetchPoster();
    }, [])

    const delPost = async () => {
        setPoster({ _id: "n/a" })
        await axios.delete(`/posts/${post._id}`, {
            data: {
                userId: poster._id
            }
        })
    }

    return (
        <div className="post">
            {poster._id === "n/a" ?
                <div className="loadingWrapper">
                    < CircularProgress />
                </div>
                :
                <div className="postWrapper">
                    <div className="friendpostleftSide">
                        <div className="postTop">
                            <img src={poster.pfp}
                                alt="" className="postAvatar" />
                            <div className="postNameAndTime">
                                <div className="PostName">{poster.username}</div>
                                <div className="PostTime">Posted {format(post.createdAt)}</div>
                            </div>
                        </div>
                        <div className="postBody">
                            {post.desc}
                        </div>
                    </div>
                    {
                        post.img === "N/A" ? null :
                            <div className="postRightSide">
                                <img src={post.img}
                                    alt="" className="postImg" />
                            </div>
                    }
                </div>}
            {
                poster._id === user._id ?
                    <div className="deletePost" onClick={delPost}><DeleteOutline /></div>
                    : null
            }
        </div>
    )
}
export default Post