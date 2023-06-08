import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import SugFriend from "../sugFriend/SugFriend"
import { AuthContext } from "../../context/AuthContext"
/* import { Posts } from "../../dummydata" */
function Feed({ username }) {
    const [posts, setPosts] = useState([])
    const [sugs, setSugs] = useState([])
    const [wSuggestion, setWsuggestion] = useState([])
    const { user } = useContext(AuthContext)

    const calcWsuggestions = () => {
        const newWsuggestions = [];

        for (let i = 0; i < sugs.length; i++) {
            const sugg = sugs[i];
            if (sugg._id === user._id) {
                continue;
            }
            let count = 0;
            for (let j = 0; j < sugg.interests.length; j++) {
                if (user.interests.includes(sugg.interests[j])) {
                    count++;
                }
            }
            newWsuggestions.push({ commonInts: count, suggestion: sugg });
        }
        setWsuggestion(newWsuggestions);
    }

    useEffect(() => {
        const fetchPosts = async () => {
            axios.get(`/posts/timeline/${user._id}`).then(res =>
                setPosts(res.data)
            ).catch(err => console.log(err))
        }
        fetchPosts();
        const fetchSugs = async () => {
            axios.get("/butterfly").then(res => {
                setSugs(res.data)
                calcWsuggestions();
            }).catch(err => console.log(err))
        }
        fetchSugs();
    }, [wSuggestion])

    return (
        <div className="feed">
            <div className="feedWrapper">
                {/* <div className="feedWelcom">Hello, {user.name.fname} 👋🏻</div> */}
                <Share />
                <div className="feedupdates">Suggested Friends 🍟</div>
                <div className="postScaffoldViewPort">
                    <div className="postsScaffold">
                        {
                            wSuggestion.sort((a, b) => b.commonInts - a.commonInts).map((s) => <SugFriend key={s.suggestion._id} wSugg={s} />)
                        }
                    </div>
                </div>
                <div className="feedupdates">Updates 🚀</div>
                <div className="postScaffoldViewPort">
                    <div className="postsScaffold">
                        {posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((p) => (
                            <Post key={p} post={p} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Feed