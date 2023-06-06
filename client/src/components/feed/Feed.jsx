import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import { useEffect, useState } from "react"
import axios from "axios"
import SugFriend from "../sugFriend/SugFriend"
/* import { Posts } from "../../dummydata" */
function Feed({ username }) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            username
                ?
                await axios.get("/posts/timeline/of/" + username)
                    .then(response => { setPosts(response.data); }).catch(err => console.log(err))
                :
                await axios.get("/posts/timeline/63f752b687afb279e8762364")
                    .then(response => { setPosts(response.data) }).catch(err => console.log(err))
        }
        fetchPosts();
    }, [])

    return (
        <div className="feed">
            <div className="feedWrapper">
                <div className="feedWelcom">Hello, Saad 👋🏻</div>
                <Share />
                <div className="feedupdates">Updates 🚀</div>
                <div className="postScaffoldViewPort">
                    <div className="postsScaffold">

                        {posts.map((p) => (
                            <Post key={p._id} post={p} />
                        ))}
                        {posts.map((p) => (
                            <Post key={p._id} post={p} />
                        ))}
                    </div>
                </div>
                <div className="feedupdates">Suggested Friends 🍟</div>
                <div className="postScaffoldViewPort">
                    <div className="postsScaffold">
                        <SugFriend />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Feed