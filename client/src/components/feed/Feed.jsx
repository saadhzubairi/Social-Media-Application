import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import SugFriend from "../sugFriend/SugFriend"
import { AuthContext } from "../../context/AuthContext"
import { CircularProgress } from "@mui/material"
/* import { Posts } from "../../dummydata" */
function Feed({ username }) {
    const [posts, setPosts] = useState([])
    const [sugs, setSugs] = useState([])
    const [wSuggestion, setWsuggestion] = useState([])
    const [isFetchingSuggs, setIsFetchingSuggs] = useState(false)
    const [shared, setShared] = useState(false)
    const { user } = useContext(AuthContext)
    const [filteredSuggestions, setFilteredSuggestions] = useState(wSuggestion.sort((a, b) => b.commonInts - a.commonInts).filter((s) => !user.pals.includes(s.suggestion._id)));
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

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
        console.log("sugs updated:", sugs);
        calcWsuggestions();
        setFilteredSuggestions(
            wSuggestion
                .sort((a, b) => b.commonInts - a.commonInts)
                .filter((s) => !user.pals.includes(s.suggestion._id))
        );
    }, [sugs]);

    useEffect(() => {
        const fetchSugs = async () => {
            setIsFetchingSuggs(true)
            try {
                const response = await axios.get("/butterfly");
                const fetchedSugs = response.data;
                setSugs(fetchedSugs);
                console.log(sugs);
                setIsFetchingSuggs(false)
            } catch (err) {
                console.log(err);
                setIsFetchingSuggs(false)
            }
        };
        fetchSugs();
        const intervalId = setInterval(fetchSugs, 15000);
        return () => {
            clearInterval(intervalId);
        };
    }, [])

    useEffect(() => {
        const fetchPosts = async () => {
            await axios.get(`/posts/timeline/${user._id}`).then(res =>
                setPosts(res.data)
            ).catch(err => console.log(err))
            setShared(false)
        }
        fetchPosts();
        const intervalId = setInterval(fetchPosts, 1000);
        return () => {
            clearInterval(intervalId);
        };
    },[shared])

    return (
        <div className="feed">
            <div className="feedWrapper">
                {/* <div className="feedWelcom">Hello, {user.name.fname} 👋🏻</div> */}
                <Share setShared={setShared} />
                <div className="feedupdates">Suggested Friends 🍟</div>
                <div className="postScaffoldViewPort">
                    {isFetchingSuggs ? <div className="noSugsF"><CircularProgress />Loading...</div> :
                        <div className="postsScaffold">
                            {
                                filteredSuggestions.length > 0 ? (
                                    filteredSuggestions.map((s) => (
                                        <SugFriend key={s.suggestion._id} wSugg={s} />
                                    ))
                                ) : (
                                    <div className="noSugsF">No suggestions found.</div>
                                )
                            }
                        </div>
                    }
                </div>
                <div className="feedupdates">Updates 🚀</div>
                <div className="postScaffoldViewPort">
                    <div className="postsScaffold">
                        {
                            posts.length > 0 ?
                                (posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((p) => (
                                    <Post key={p._id} post={p}  />
                                )))
                                :
                                (<div className="noSugsF">No posts found.</div>)
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Feed