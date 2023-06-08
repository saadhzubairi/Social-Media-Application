import { format } from "timeago.js";
import "./post.css";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";

function Post({ post }) {
    const [poster, setPoster] = useState({ _id: "n/a" })

    useEffect(() => {
        const fetchPoster = async () => {
            await axios.get(`/butterfly?id=${post.userId}`).then(res => setPoster(res.data)).catch(err => console.log(err))
        }
        fetchPoster();
    })

    return (
        <div className="post">
            {poster._id === "n/a" ? < CircularProgress /> :
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
        </div>
    )
}
export default Post